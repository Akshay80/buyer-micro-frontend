"use client"
import { API, GraphQLQuery } from "@aws-amplify/api";
import { Auth } from "aws-amplify";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const HeaderCartCounter = () => {
    const [user, setUser] = useState<any>(null);
    const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(existingCartItems);
    }, []);


    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser?.attributes);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };

    const path = usePathname()


     
    useEffect(() => {
        Auth.currentAuthenticatedUser().then(async (user: any) => {
            const buyers: any = await API.graphql<GraphQLQuery<any>>({
                query: buyerUsersByUserId,
                variables: {
                    userId: user.attributes.sub
                }
            })
            if (buyers.data?.buyerUsersByUserId?.items?.length > 0) {
                localStorage.setItem('buyers', JSON.stringify(buyers.data?.buyerUsersByUserId?.items))
                localStorage.setItem('buyer', JSON.stringify(buyers?.data?.buyerUsersByUserId?.items[0]))
            } else {
                localStorage.setItem('buyers', JSON.stringify([]))
                localStorage.setItem('buyer', JSON.stringify({}))
            }
        }).catch((error: any) => {
            console.error('error', error)
        })
    }, [])


    return (
        <>
         {user?.sub && !path.includes('onboarding') && <div className="list-inline-item me-9">
                <a className="text-muted position-relative " href='/cart' role="button" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1={3} y1={6} x2={21} y2={6} />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        <span className="">{cartItems?.length}</span>
                    </span>
                </a>

            </div>}   
        </>
    )
}
export default HeaderCartCounter

const buyerUsersByUserId = /* GraphQL */ `
  query BuyerUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBuyerUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    buyerUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buyerId
        userId
        role
        buyer {
          age
          address
          email
          image
          documents
          name
          phone
          profile
          rating
        }
        user {
          email
          id
          deleted
          phone
          photo
          role
          name
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;