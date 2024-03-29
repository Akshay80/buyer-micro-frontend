/* eslint-disable */
// @ts-nocheck
"use client"
import { Fragment, useEffect, useRef, useState } from "react"
import { API, Auth, Storage } from "aws-amplify"
import { GraphQLQuery, GraphQLSubscription, graphqlOperation } from "@aws-amplify/api"
import moment from "moment"
import { OnUpdateMessageSubscriptionVariables } from "graphql"
import toast from "react-hot-toast"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const searchChats = /* GraphQL */ `
  query SearchChats(
    $filter: SearchableChatFilterInput
    $sort: [SearchableChatSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableChatAggregationInput]
  ) {
    searchChats(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        seller {
            id
            name
            image
          }
          buyerId
          sellerId
          createdAt
          updatedAt
      }
      total
    }
  }
`;

const searchMessages = /* GraphQL */ `
  query SearchMessages(
    $filter: SearchableMessageFilterInput
    $sort: [SearchableMessageSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMessageAggregationInput]
  ) {
    searchMessages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        chatId
        sellerId
        buyerId
        senderReceiver
        content
        media
        readBy
        createdAt
        updatedAt
        messageParentMessageId
        messageSenderId
      }
      total
    }
  }
`;

const createMessage = /* GraphQL */ `
mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    chatId
    chat {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
    sellerId
    seller {
      id
      name
      profile
      image
      taxId
      active
      verified
      phone
      email
      website
      address
      attributes
      images
      documents
      rating
      bank
      age
      gender
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    buyerId
    buyer {
      id
      buyerType
      name
      profile
      image
      taxId
      active
      verified
      phone
      email
      website
      address
      attributes
      images
      documents
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    parentMessage {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    sender {
      id
      name
      photo
      phone
      email
      role
      deleted
      createdAt
      updatedAt
      __typename
    }
    senderReceiver
    content
    media
    readBy
    createdAt
    updatedAt
    messageParentMessageId
    messageSenderId
    __typename
  }
}
`;

const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      chatId
      chat {
        id
        buyerId
        sellerId
        createdAt
        updatedAt
        chatMessageId
        __typename
      }
      sellerId
      seller {
        id
        name
        profile
        image
        taxId
        active
        verified
        phone
        email
        website
        address
        attributes
        images
        documents
        rating
        bank
        age
        gender
        industryId
        businessId
        createdAt
        updatedAt
        __typename
      }
      buyerId
      buyer {
        id
        buyerType
        name
        profile
        image
        taxId
        active
        verified
        phone
        email
        website
        address
        attributes
        images
        documents
        categories
        rating
        age
        gender
        createdAt
        updatedAt
        buyerCartId
        __typename
      }
      parentMessage {
        id
        chatId
        sellerId
        buyerId
        senderReceiver
        content
        media
        readBy
        createdAt
        updatedAt
        messageParentMessageId
        messageSenderId
        __typename
      }
      sender {
        id
        name
        photo
        phone
        email
        role
        deleted
        createdAt
        updatedAt
        __typename
      }
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
  }
`;

const Chat = () => {
  const [message, setMessage] = useState("")
  const [assets, setAssets] = useState<any[]>([]);
  const [videoUrl, setVideoUrl] = useState("")
  const [user, setUser] = useState<any>(null)
  const [sellerChatsList, setSellerChatList] = useState([])
  const [buyerid, setBuyerId] = useState("")
  const [chatId, setChatId] = useState("")
  const [sellerId, setSellerId] = useState("")
  const [userId, setUserId] = useState("")
  const [chatItems, setChatItems] = useState([])
  const [show, setShow] = useState(false);
  const subRef = useRef<any>(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      setUser(response?.attributes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const buyerUser = JSON.parse(window.localStorage.getItem("buyer") || '')
    setBuyerId(buyerUser?.buyerId)
    setUserId(buyerUser?.user?.id)
    getCreatedMessages()
  }, [])

  useEffect(() => {
    if (buyerid) {
      getsearchChats()
    }
  }, [buyerid])

  const getsearchChats = async () => {
    setLoading(true)
    try {
      const response = await API.graphql<GraphQLQuery<any>>({
        query: searchChats,
        variables: { filter: { buyerId: { eq: buyerid } } }
      });
      setLoading(false)
      setSellerChatList(response?.data?.searchChats?.items);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChatId = (id: any, sellerId: any) => {
    setChatId(id)
    setSellerId(sellerId)
  }

  useEffect(() => {
    if (chatId) {
      fetchMessages()
    }
    getCreatedMessages()
  }, [chatId])

  const getCreatedMessages = () => {
    if (subRef.current) {
      subRef.current.unsubscribe();
    }
    const variables = {
      filter: { chatId: { eq: chatId } }
    }
    subRef.current = API.graphql<GraphQLSubscription<OnUpdateMessageSubscriptionVariables>>(
      graphqlOperation(onCreateMessage, variables)
    ).subscribe({
      next: ({ provider, value }: any) => {
        setChatItems((prev: any) => {
          const newMessage = {
            content: JSON.parse(value?.data?.onCreateMessage?.content),
            media: JSON.parse(value?.data?.onCreateMessage?.media),
            senderReceiver: value?.data?.onCreateMessage?.senderReceiver
          };
          const updatedMessages: any = [newMessage, ...prev];
          return updatedMessages;
        });
      },
      error: (error) => console.warn(error)
    });
  }

  const fetchMessages = async () => {
    try {
      const response = await API.graphql<GraphQLQuery<any>>({
        query: searchMessages,
        variables: { filter: { chatId: { eq: chatId } }, sort: { direction: "desc", field: "createdAt" } }
      });

      if (response?.data?.searchMessages?.items) {
        const parsedItems = response.data.searchMessages.items.map((item: any) => ({
          ...item,
          content: JSON.parse(item.content),
          media: JSON.parse(item.media)
        }))
        setChatItems(parsedItems)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = async (e: any, type: any) => {
    const toastId = toast.loading('Uploading...');
    if (e.target.files) {
      const file = e.target.files[0]
      const stored = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
      const url = await Storage.get(stored.key, { level: 'public' })
      let ImageUrl = url.split('?')[0]

      if (ImageUrl) {
        const parts = ImageUrl.split('/');
        const filename = parts[parts.length - 1];
        const id = filename.split('.')[0];
        const name = filename
        const updatedAssets = [...assets, { url: ImageUrl, type, id, name }]
        setAssets(updatedAssets)
      }
      toast.dismiss(toastId);
    }
  }

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedAssets = assets.filter((_, index) => index != indexToRemove)
    setAssets(updatedAssets)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const assetsJsonString = JSON.stringify(assets);
    if (message?.trim() || assets?.length > 0) {
      try {
        const content =
        {
          "productQuantity": null,
          "productImage": null,
          "productId": null,
          "text": message,
          "type": "text",
          "productName": null
        }
        await API.graphql<GraphQLQuery<any>>({
          query: createMessage,
          variables: {
            input: {
              chatId: chatId,
              messageSenderId: userId,
              senderReceiver: `${buyerid}:${sellerId}`,
              content: JSON.stringify(content),
              media: assetsJsonString,
            }
          }

        })
        setAssets([])
        setMessage('')
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error('Field Cannot be empty')
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = (videoURL: any) => {
    setShow(true)
    setVideoUrl(videoURL)
  };

  return (
    <div className="container-fluid">
      <div className="p-4 mb-5 position-relative" style={{ backgroundColor: '#12121221' }} >

        <div className="row">
          <div className="col-lg-3">
            <div className="py-2 px-3 bg-white rounded w-100 mb-3" >
              <div className="d-flex align-items-center">
                <div>
                  <img src="https://wtx-cdn.s3.amazonaws.com/img/profile.png" alt="" className="avatar avatar-md rounded-circle" />
                </div>
                <div className="ms-3 lh-1 w-100">
                  <div className="w-100">
                    <h6 className="mb-0">{user?.name}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="py-2 px-3 bg-white rounded w-100 mb-3" >
              <div className="d-flex align-items-center">
                <div>
                  <img src="https://wtx-cdn.s3.amazonaws.com/img/profile.png" alt="" className="avatar avatar-md rounded-circle" />
                </div>
                <div className="ms-3 lh-1 w-100">
                  <div className="d-flex justify-content-between w-100">
                    <h6 className="mb-0">{user?.name}</h6>
                    <div className="">
                      <i className="feather-icon icon-bell me-2 cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row position-relative">
          <div className="col-lg-3" style={{ height: '71vh', overflowY: 'scroll', scrollbarWidth: 'none' }}>
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              sellerChatsList.map((item: any) => {
                const { updatedAt } = item;
                const { id, sellerId, seller } = item;
                const formattedUpdatedAt = moment(updatedAt).format('DD MMM YY, h:mm:ss a');
                return <div key={id} className={`py-5 px-3 rounded w-100 mb-3 cursor-pointer ${chatId === id ? 'bg-dark text-white' : 'bg-light'}`} onClick={() => handleChatId(id, sellerId)}>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={seller?.image} alt={seller?.name ? seller?.name : 'worldtradex'} className="avatar avatar-md rounded-circle" />
                    </div>
                    <div className="ms-3 lh-1 w-100">
                      <div className="w-100">
                        <h6 className={`mb-0 ${chatId === id && 'text-white'}`}>{seller?.name}</h6>
                        <p className="mb-0 mt-2">{formattedUpdatedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              }))}
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Video Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video autoPlay muted loop controls className='d-block' style={{ width: '100%' }}>
                <source src={videoUrl} type='video/mp4' />
              </video>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                <a href={videoUrl} target="_blank" className="nav-link"> Download </a>
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="col-lg-9 position-relative">
            <div className="py-5 bg-white rounded w-100" style={{ height: '65vh', scrollbarWidth: 'none' }}>
              <div className="d-flex flex-column-reverse justify-content-between h-100" style={{ overflowY: 'scroll' }}>
                <div className="chats px-3" style={{ display: assets?.length > 0 ? 'none' : 'block' }}>
                  <div className="senders-msg">
                    <div className="rounded mb-2 w-100" style={{ width: 'fit-content' }}>
                      {
                        chatItems?.map((message: any) => (
                          message?.senderReceiver?.split(':')[0] === `${buyerid}` ?
                            <div key={message?.id}>
                              <div className='mt-4' >
                                {
                                  message?.content?.text && <div className='text-end '>
                                    <span className='bg-dark rounded p-3 text-white'>{message?.content?.text}</span>
                                  </div>
                                }

                                <div className="text-end my-2">
                                  {message?.media && message?.media.map((item: any, index: number) => (
                                    <>
                                      <div key={index}>
                                        {item.type === 'image' && (
                                          <a href={item?.url} target="_blank">
                                            <img src={item?.url} style={{ width: '100px' }} className="rounded" alt="" />
                                          </a>
                                        )}
                                        {item.type === 'video' && (
                                          <video autoPlay muted loop style={{ width: '100px' }} className="rounded" onClick={() => handleShow(item?.url)}>
                                            <source src={item?.url} type="video/mp4" />
                                          </video>
                                        )}
                                        {item.type === 'document' && (
                                          <div className="document-display rounded">
                                            <a href={item?.url} target="_blank">
                                              <img src="https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png" alt=""
                                                className="img-fluid" style={{ width: '75px' }} />
                                            </a>
                                          </div>
                                        )}
                                      </div>

                                    </>
                                  ))}
                                </div>
                              </div>

                              <div className="text-end">
                                <span>
                                  {moment(message?.updatedAt).format('DD MMM YY, h:mm a')}
                                </span>
                              </div>
                            </div>
                            :
                            <div key={message?.id}>
                              <div className='mt-4'>
                              {message?.content?.text && <div className='text-start '>
                                <span className='bg-light rounded p-3'>{message?.content?.text}</span>
                              </div>}
                              <div className="text-start my-2">
                                {message?.media && message?.media.map((item: any, index: number) => (
                                  <Fragment key={index}>
                                    <div>
                                      {item.type === 'image' && (
                                        <a href={item?.url} target="_blank">
                                          <img src={item?.url} style={{ width: '100px' }} className="rounded" alt="" />
                                        </a>
                                      )}
                                      {item.type === 'video' && (
                                        <video autoPlay muted loop style={{ width: '100px' }} className="rounded" onClick={() => handleShow(item?.url)}>
                                          <source src={item?.url} type="video/mp4" />
                                        </video>
                                      )}
                                      {item.type === 'document' && (
                                        <div className="document-display rounded">
                                          <a href={item?.url} target="_blank">
                                            <img src="https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png" alt=""
                                              className="img-fluid" style={{ width: '75px' }} />
                                          </a>
                                        </div>
                                      )}
                                    </div>
                                    {/* <span className="my-2">
                                      {moment(message?.updatedAt).format('DD MMM YY, h:mm a')}
                                    </span> */}
                                  </Fragment>
                                ))}
                              </div>
                            </div>
                            <div className="text-start">
                                <span>
                                  {moment(message?.updatedAt).format('DD MMM YY, h:mm a')}
                                </span>
                              </div>
                            </div>
                        )).reverse()
                      }
                    </div>
                  </div>
                </div>

                {/* card */}
                {chatId && assets.length > 0 && <div className="mx-4">
                  <div className="card mb-3 card-lift w-auto">
                    <div className="card-body text-center py-6 text-center d-flex justify-content-start flex-wrap">
                      {assets?.map((item, index) => {
                        return (
                          <div className="position-relative me-3" key={index}>
                            {item.type.toLowerCase() === 'image' && (
                              <img src={item?.url} alt="image" className="img-fluid" style={{ width: '75px' }} />
                            )}
                            {item.type.toLowerCase() === 'video' && (
                              <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                <source src={item?.url} type='video/mp4' />
                              </video>
                            )}
                            {item.type.toLowerCase() === 'document' && (
                              <div className="document-display">
                                <img src="https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png" alt="" className="img-fluid" style={{ width: '75px' }} />
                              </div>
                            )}
                            <div className="position-absolute bg-dark p-1 rounded cursor-pointer" onClick={() => handleRemoveItem(index)} style={{ top: '0', right: '0' }}>
                              <i className="bi bi-x-circle"></i>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>}

                {chatId ? <form onSubmit={handleSubmit} className="position-absolute bg-white rounded" style={{ bottom: '4px', width: '97%', border: '1px solid #e0e0e0' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <input type="text" id="fname" className="form-control border-0" style={{ outline: 'none' }} name="fname" placeholder="Enter Your First Name" value={message}
                      onChange={(event) => setMessage(event.target.value)} />
                    <div className="btn-group dropup-center">
                      <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-paperclip"></i>
                      </button>
                      <div className="dropdown-menu">
                        <div className="file-input">
                          <input type="file" accept="image/*" name="file-input" typeof="" id="file-input" className="file-input__input"
                            onChange={(e) => handleFileChange(e, 'image')} />
                          <label className="file-input__label" htmlFor="file-input">
                            <i className="bi bi-image primary"></i>
                            <span className="ms-1">Image</span>
                          </label>
                        </div>
                        <br />

                        <div className="file-input">
                          <input type="file" accept="video/*" name="file-input" id="file-input" className="file-input__input"
                            onChange={(e) => handleFileChange(e, 'video')} />
                          <label className="file-input__label" htmlFor="file-input">
                            <i className="bi bi-play-btn primary"></i>
                            <span className="ms-1">Video</span></label>
                        </div>
                        <br />

                        <div className="file-input">
                          <input type="file" name="file-input" id="file-input" className="file-input__input"
                            accept=".doc, .docx, .pdf, .txt, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/plain"
                            onChange={(e) => handleFileChange(e, 'document')}
                          />
                          <label className="file-input__label" htmlFor="file-input">
                            <i className="bi bi-file-earmark primary"></i>
                            <span className="ms-1">Document</span></label>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary"> send </button>
                  </div>
                </form> :
                  <div className="card mb-3 card-lift mx-3" style={{ height: '75vh' }}>
                    <div className="card-body text-center py-6 text-center d-flex justify-content-center align-items-center">
                      <div>Select Seller to start conversation</div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat