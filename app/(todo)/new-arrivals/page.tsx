/* eslint-disable */
// @ts-ignore
import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { API } from "aws-amplify";
import { Metadata } from "next";

const searchProducts = /* GraphQL */ `
  query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: [SearchableProductSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductAggregationInput]
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        code
        name
        description
        image
        images
        documents
        listPrice
        unitPrice
        tierPrice
        unitType
        taxCategoryId
        attributes
        weight
        active
        verified
        taxExempt
        keywords
        leadTime
        rating
        stock
        sellerId
        productCategoryId
        productSubCategoryId
        createdAt
        updatedAt
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

export const metadata: Metadata = {
  title: `New Arrivals - ${PAGE_TITLE}`,
  description: "",
};

async function getData() {
  try {
    const response = await API.graphql<any>({
      query: searchProducts,
      variables: {
        sort: { direction: "asc", field: "createdAt" },
      },
    });
    return response?.data?.searchProducts?.items || [];
  } catch (error) {
    console.log(error);
  }
}

interface NewArrivalProductsProps {
  limit?: number;
}

export default async function NewArrivalProducts(
  props: NewArrivalProductsProps
) {
  const listTopRankings = await getData();

  return (
    <div className={`container-fluid ${!props?.limit && "my-5"}`}>
      {!props?.limit && <h3 className="mb-4">New Arrivals</h3>}
      <div className="row">
        {listTopRankings
          ?.slice(0, !props?.limit ? 18 : props?.limit)
          .map((item: any) => {
            return (
              <div className="col-xl-2 col-lg-3 col-sm-3 col-md-4 col-6 mb-4 m-0 p-1" key={item.id}>
                <a
                  href={`/product/${item?.id}`}
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product">
                    <div className="card-body text-center py-8 text-center">
                      <img
                        src={item?.image}
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                        style={{ height: "200px" }}
                      />
                      <p className="text-truncate" style={{ fontSize: "16px" }}>
                        {item?.name}
                      </p>
                      <div className="d-flex justify-content-center">
                        <p
                          className="text-truncate me-3"
                          style={{ fontSize: "14px" }}
                        >
                          USD: {item?.listPrice}
                        </p>
                        <p
                          className="text-truncate"
                          style={{ fontSize: "14px" }}
                        >
                          Type: {item?.unitType}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
