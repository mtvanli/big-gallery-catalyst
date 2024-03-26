import {
  ProductCard as ComponentsProductCard,
  ProductCardImage,
  ProductCardInfo,
  ProductCardInfoBrandName,
  ProductCardInfoPrice,
  ProductCardInfoProductName,
} from '@bigcommerce/components/product-card';
import { Rating } from '@bigcommerce/components/rating';
import Image from 'next/image';
import { useId } from 'react';

import { OpenInNewIcon } from 'components/custom-icons/open-in-new'

import { Link } from '~/components/link';
import { cn } from '~/lib/utils';

import { Pricing } from '../pricing';

import { Cart } from './cart';
import { Compare } from './compare';


export interface Product {
  entityId: number;
  name: string;
  defaultImage?: {
    altText?: string;
    url?: string;
  } | null;
  path: string;
  brand?: {
    name: string;
    path: string;
  } | null;
  prices?: {
    price?: {
      value?: number;
      currencyCode?: string;
    };
    basePrice?: {
      value?: number;
      currencyCode?: string;
    } | null;
    retailPrice?: {
      value?: number;
      currencyCode?: string;
    } | null;
    salePrice?: {
      value?: number;
      currencyCode?: string;
    } | null;
    priceRange?: {
      min?: {
        value?: number;
        currencyCode?: string;
      } | null;
      max?: {
        value?: number;
        currencyCode?: string;
      } | null;
    } | null;
  } | null;
  reviewSummary?: {
    numberOfReviews: number;
    averageRating: number;
  } | null;
  productOptions?: Array<{
    entityId: number;
  }>;
  customFields?: CustomFields;
}

interface CustomFieldNode {
  entityId: number;
  name: string;
  value: string;
}

// Permit edges to be null or contain null entries.
interface CustomFields {
  edges: ({ node: CustomFieldNode } | null)[] | null;
}

interface ProductCardProps {
  product: Partial<Product>;
  imageSize?: 'tall' | 'wide' | 'square';
  imagePriority?: boolean;
  showCart?: boolean;
  showCompare?: boolean;
}

export const ProductCard = ({
  product,
  imageSize = 'tall',
  imagePriority = false,
  showCart = false,
  showCompare = false,
}: ProductCardProps) => {
  const summaryId = useId();

  if (!product.entityId) {
    return null;
  }

  return (
    <ComponentsProductCard key={product.entityId}>
      <ProductCardImage>
        <div
          className={cn('relative flex-auto', {
            'aspect-square': imageSize === 'square',
            'aspect-[4/5]': imageSize === 'tall',
            'aspect-[7/5]': imageSize === 'wide',
          })}
        >
          {product.defaultImage ? (
            <Image
              alt={product.defaultImage.altText ?? product.name ?? ''}
              className="rounded-t-lg"
              fill
              priority={imagePriority}
              src={product.defaultImage.url ?? ''}
              quality={100}
            />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>
      </ProductCardImage>
      <ProductCardInfo className={cn(showCart && 'justify-end')}>
        {product.brand && <ProductCardInfoBrandName>{product.brand.name}</ProductCardInfoBrandName>}
       <div className='flex flew-row justify-center items-center '>
      
        <ProductCardInfoProductName>
          {product.path ? (
            <Link
              className="f"
              href={product.path}
            >
              <span aria-hidden="true" className="absolute inset-0 bottom-20" />
              {product.name}
            </Link>
          ) : (
            product.name
          )
          }
      
        </ProductCardInfoProductName>
      
        <div className='pt-2'>
          {
            product.customFields?.edges?.map((edge) => 
              edge && (
                 (edge.node.name === "Store" ?
                <div className='pl-2 pt-0'>
                  <Link href={edge.node.value} target="_blank">  <OpenInNewIcon /> </Link>
                </div> : "")
              )
            )
          }
        </div>
 
        
        </div>

        <div className='flex flew-row flex-wrap justify-center items-center lg:text-sm sm:text-xs'>
        <div>
          {
            product.customFields?.edges?.map((edge) => 
              edge && (
                (edge.node.name === "Segment" ?
                <div>
                  <p className=' pl-2 pr-2 pt-1 pb-1 mt-1 mr-2 border-transparent rounded-full bg-sky-100'>{edge.node.value} </p>
                </div> :"")
              )
            )
          }
        </div>

        <div>
          {
            product.customFields?.edges?.map((edge) => 
              edge && (
                (edge.node.name === "Presentation" ?
                <div>
                  <p className=' pl-2 pr-2 pt-1 pb-1 mt-1 mr-2 border-transparent rounded-full bg-gray-100'>{edge.node.value} </p>
                </div> :"")
              )
            )
          }
        </div>
        <div>
          {
            product.customFields?.edges?.map((edge) => 
              edge && (
                (edge.node.name === "Channel" && edge.node.value!=="Marketplaces" && edge.node.value!=="na" ?
                <div>
                  <p className='pl-2 pr-2 pt-1 pb-1 mt-1 mr-2 border-transparent rounded-full bg-green-100'>{edge.node.value}</p>
                </div> :"")
              )
            )
          }
        </div>
        </div>
      
   
        


 {/*        {product.reviewSummary && (
          <div className="flex items-center gap-3">
            <p
              aria-describedby={summaryId}
              className={cn(
                'flex flex-nowrap text-blue-primary',
                product.reviewSummary.numberOfReviews === 0 && 'text-gray-400',
              )}
            >
              <Rating size={16} value={product.reviewSummary.averageRating || 0} />
            </p>

            <div className="text-xs font-normal text-gray-500" id={summaryId}>
              {product.reviewSummary.averageRating !== 0 && (
                <>
                  <span className="sr-only">Rating:</span>
                  {product.reviewSummary.averageRating}
                  <span className="sr-only">out of 5 stars.</span>{' '}
                </>
              )}
              <span className="sr-only">Number of reviews:</span>(
              {product.reviewSummary.numberOfReviews})
            </div>
          </div>
        )} */}
        <div className="flex flex-wrap items-end justify-between pt-2">
  {/*         <ProductCardInfoPrice>
            <Pricing prices={product.prices} />
          </ProductCardInfoPrice> */}
          {showCompare && (
            <Compare
              productId={product.entityId}
              productImage={product.defaultImage}
              productName={product.name ?? ''}
            />
          )}
        </div>
      </ProductCardInfo>
      {showCart && <Cart product={product} />}
    </ComponentsProductCard>
  );
};
