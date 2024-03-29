"use client"

import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface sellerChatProps {
    sellerId: string;
}

const SellerChat = (props: sellerChatProps) => {
    const [buyerId, setBuyerId] = useState("")

    useEffect(() => {
        let temp = window.localStorage.getItem('buyer')
        if(temp){
            const buyerUser = JSON.parse(temp)
            setBuyerId(buyerUser?.buyerId)
        }
    }, [])

    const handleCreateChat = async () => {
        if (buyerId) {
            try {

                const chatsCheck = await API.graphql<GraphQLQuery<any>>({
                    query: searchChats,
                    variables: { filter: {buyerId: {eq: buyerId}, sellerId: {eq: props?.sellerId}} }
                  });                    
                  if(chatsCheck?.data?.searchChats?.items[0]?.id){
                    window.location.href = "/app/messages"
                  } else {
                    await API.graphql<GraphQLQuery<any>>({
                        query: createChat,
                        variables: { input: {buyerId: buyerId, sellerId: props?.sellerId }}
                    });
                  }
            } catch (error) {
                console.log(error);
            }
            window.location.href = '/app/messages'
        } else {
            toast.error('Please login/signup to chat')
        }
    }

    return (
        <button className="btn bg-dark text-white d-flex align-items-center" onClick={handleCreateChat}>
            <i className="feather-icon fs-4 icon-message-square me-2 text-center mx-auto"></i>
            <span>Chat With Seller</span>
        </button>
    )
}

export default SellerChat


const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
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
      message {
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
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
  }
`;

export const searchChats = /* GraphQL */ `
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
        buyerId
        sellerId
        createdAt
        updatedAt
        chatMessageId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;