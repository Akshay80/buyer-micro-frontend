import { GraphQLQuery } from '@aws-amplify/api';
// import Layout from 'apps/buyer/components/layout/layout';
import { ProductCard } from '../../../../components/product-card/product-card';
import { API } from 'aws-amplify';
import { Metadata } from 'next';
import { getProductSubCategory, listProductCategories, searchProducts } from '@/graphql/queries';

async function getSubCategory(productSubCategoryId: string) {
  const response: any = await API.graphql<GraphQLQuery<any>>({
    query: getProductSubCategory,
    variables: { id: productSubCategoryId }
  })
  return response.data.getProductSubCategory;
}

async function getCategories() {
  const response: any = await API.graphql<GraphQLQuery<any>>({
    query: listProductCategories,
    variables: {}
  });
  return response.data.listProductCategories.items;
}

async function getProducts(productSubCategoryId: string) {
  const response: any = await API.graphql<GraphQLQuery<any>>({
    query: searchProducts,
    variables: {
      filter: {
        productSubCategoryId: { eq: productSubCategoryId }
      }
    }
  })

  return response.data.searchProducts.items;
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const category = await getSubCategory(id)

  return {
    title: `${category.name} - ${category.productCategory.name} - WorldTradeX`,
  }
}

export default async function Id({ params }: Props) {
  const id = params.id
  const [categories, subCategory, products] = await Promise.all([getCategories(), getSubCategory(id), getProducts(id)]);

  return (
    <>
      <div className="mt-8 mb-lg-14 mb-8">
        <div className="container-fluid">
          <div className="row">

            <aside className="col-xl-2 col-lg-3 col-md-4 mb-6 mb-md-0">
              <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabIndex={-1} id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                <div className="offcanvas-header d-lg-none">
                  <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body ps-lg-2 pt-lg-0">
                  <div className="mb-8">
                    <ul className="nav nav-category" id="categoryCollapseMenu">
                      {
                        categories?.map((category: any, index: number) =>
                        (
                          <li className="nav-item border-bottom w-100 " key={index}>
                            <a href={`/category/${category?.id}`} className="nav-link collapsed text-primary">
                              {category?.name} <i className="feather-icon icon-chevron-right" />
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            <section className="col-xl-10 col-lg-9 col-md-12">
              <div className="card mb-4 bg-light border-0">
                <div className=" card-body p-9">
                  <h2 className="mb-0 fs-1">{subCategory?.name}</h2>
                </div>
              </div>

              <div className="d-lg-flex justify-content-between align-items-center">
                <div className="mb-3 mb-lg-0">
                  <p className="mb-0"> <span className="text-dark">{products?.length} </span> products found</p>
                </div>
                <div className="d-md-flex justify-content-between align-items-center">
                  <div className="d-flex mt-2 mt-lg-0">
                    <div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 row-cols-xl-5 row-cols-md-3 row-cols-2 mt-2">
                {
                  products.map((product: any, index: number) => <ProductCard product={product} key={index}/>)
                }
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}