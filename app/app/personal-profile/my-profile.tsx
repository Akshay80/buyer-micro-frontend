/* eslint-disable*/
// @ts-ignore
// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { API, Auth, Storage } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../libs/shared/ui/src/components/spinner/spinner";
import PhoneInput from "react-phone-number-input";

export interface ProfileProps {}

interface getBuyerByUserProps {
  buyerUsersByUserId: {
    userId: string;
    items: any;
  };
}
interface getUserProps {
  getUser: {
    id: string;
    name: string;
    phone: string;
    email: string;
    role: string;
    photo: string;
  };
}

interface updateBuyerProps {
  getBuyer: {
    id: string;
    name: string;
    phone: string;
    email: string;
    role: string;
    image: string;
  };
}

const MyProfile = () => {
  const [spinner, setSpinner] = useState(true);
  const [phone, setphone] = useState<any>();
  const [userData, setuserData] = useState<any>();
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    role: "",
    image: "",
  });

  useEffect(() => {
    Auth.currentUserInfo().then((res: any) => {
      if (res?.attributes?.sub) {
        async function getbuyerId() {
          const user = await API.graphql<GraphQLQuery<getUserProps>>({
            query: getUser,
            variables: {
              id: res?.attributes?.sub,
            },
          });
          if (user?.data?.getUser) {
            console.log(user?.data?.getUser, "user?.data?.getUser");
            const data = {
              id: user?.data?.getUser?.id,
              name: user?.data?.getUser?.name,
              email: user?.data?.getUser?.email,
              role: user?.data?.getUser?.role,
              image: user?.data?.getUser?.photo,
            };
            if (user?.data?.getUser?.phone) {
              setphone(user?.data?.getUser?.phone);
            }
            setuserData(data);
          }
        }
        getbuyerId();
      }
    });
  }, []);

  useEffect(() => {
    if (userData) {
      setSpinner(true);
      setFormData({
        id: userData?.id,
        name: userData?.name,
        email: userData?.email,
        role: userData?.role,
        image: userData?.image,
      });
      setSpinner(false);
    }
  }, [userData]);

  const handleChange = (e: any) => {
    setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      const stored = await Storage.put(
        `WTX-${Math.random().toString(36).substring(2, 15)}.${
          file.name.split(".")[1]
        }`,
        file,
        { contentType: file.type }
      );
      const url = await Storage.get(stored.key, { level: "public" });
      let ImageUrl = url.split("?")[0];
      if (ImageUrl) {
        setFormData((prev: any) => ({
          ...prev,
          image: ImageUrl,
        }));
      }
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSpinner(true);
    try {
      await API.graphql<GraphQLQuery<updateBuyerProps>>({
        query: updateUser,
        variables: {
          input: {
            id: userData?.id,
            name: formData?.name,
            phone: phone,
            role: formData?.role,
            photo: formData?.image,
          },
        },
      });
      toast.success("Profile updated!!");
      setSpinner(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error);
      setSpinner(false);
    }
  };

  return (
    <Spinner show={spinner}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 col-12">
            {/* card */}
            {/* card body */}
            <div className=" p-6 ">
              <h2>My Profile</h2>
              <h4 className="mb-5 h5">Profile Image</h4>
              <div className="mb-4 d-flex">
                <div className="position-relative">
                  <img
                    className="image  icon-shape icon-xxxl bg-light rounded-4"
                    src={
                      formData?.image
                        ? formData?.image
                        : "https://wtx-cdn.s3.amazonaws.com/img/profile.png"
                    }
                    alt="Image"
                  />
                  <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                    <input
                      type="file"
                      id="profile"
                      className="file-input"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <label htmlFor="profile">
                      <span className="icon-shape icon-sm rounded-circle bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="currentColor"
                          className="bi bi-pencil-fill text-muted"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <h4 className="mb-4 h5 mt-5">Profile Information</h4>
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Full Name"
                      value={formData?.name}
                      required
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Email</label>
                    <input
                      disabled
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Enter Email"
                      value={formData?.email}
                      required
                    />
                  </div>

                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Phone number</label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setphone}
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Role</label>
                    <select
                      className="form-control"
                      name="role"
                      onChange={handleChange}
                      value={formData?.role}
                      required
                    >
                      <option value="OWNER">Owner</option>
                      <option value="EDITOR">Editor</option>
                      <option value="VIEWER">Viewer</option>
                    </select>
                  </div>
                  <div></div>
                  {/* input */}
                  <div className="col-lg-12  mt-3">
                    <button type="submit" className="btn btn-dark">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Spinner>
  );
};

export default MyProfile;

const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      photo
      phone
      email
      role
      deleted
      buyers {
        nextToken
      }
      sellers {
        nextToken
      }
      devices {
        nextToken
      }
      notifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      photo
      phone
      email
      role
      deleted
      buyers {
        nextToken
      }
      sellers {
        nextToken
      }
      devices {
        nextToken
      }
      notifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
