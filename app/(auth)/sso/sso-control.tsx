'use client';

import { GraphQLQuery } from '@aws-amplify/api';
// import { Spinner } from '@wtx/shared/ui';
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const SsoControl = () => {
    const [spinner, showSpinner] = useState<boolean>(true)

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
                window.location.href = '/';
            } else {
                localStorage.setItem('buyers', JSON.stringify([]))
                localStorage.setItem('buyer', JSON.stringify({}))
                window.location.href = '/onboarding';
            }
            showSpinner(false)
        }).catch((error: any) => {
            console.error('error', error)
        })
    }, [])

    return (
        <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
            <Spinner show={spinner}>
                <div className='text-center my-5'>
                    Please wait
                </div>
            </Spinner>
        </div>
    )
}

export default SsoControl;

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