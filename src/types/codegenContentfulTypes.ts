export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>
  lossless?: Maybe<Scalars['Boolean']>
  speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = ContentfulReference &
  Node & {
    __typename?: 'ContentfulAsset'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    file?: Maybe<ContentfulAssetFile>
    title?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    node_locale?: Maybe<Scalars['String']>
    sys?: Maybe<ContentfulAssetSys>
    localFile?: Maybe<File>
    fixed?: Maybe<ContentfulFixed>
    fluid?: Maybe<ContentfulFluid>
    gatsbyImageData?: Maybe<Scalars['JSON']>
    resize?: Maybe<ContentfulResize>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ContentfulImagePlaceholder>
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  quality?: Maybe<Scalars['Int']>
}

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat?: Maybe<ContentfulImageFormat>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge'
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image___width = 'file___details___image___width',
  file___details___image___height = 'file___details___image___height',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  localFile___sourceInstanceName = 'localFile___sourceInstanceName',
  localFile___absolutePath = 'localFile___absolutePath',
  localFile___relativePath = 'localFile___relativePath',
  localFile___extension = 'localFile___extension',
  localFile___size = 'localFile___size',
  localFile___prettySize = 'localFile___prettySize',
  localFile___modifiedTime = 'localFile___modifiedTime',
  localFile___accessTime = 'localFile___accessTime',
  localFile___changeTime = 'localFile___changeTime',
  localFile___birthTime = 'localFile___birthTime',
  localFile___root = 'localFile___root',
  localFile___dir = 'localFile___dir',
  localFile___base = 'localFile___base',
  localFile___ext = 'localFile___ext',
  localFile___name = 'localFile___name',
  localFile___relativeDirectory = 'localFile___relativeDirectory',
  localFile___dev = 'localFile___dev',
  localFile___mode = 'localFile___mode',
  localFile___nlink = 'localFile___nlink',
  localFile___uid = 'localFile___uid',
  localFile___gid = 'localFile___gid',
  localFile___rdev = 'localFile___rdev',
  localFile___ino = 'localFile___ino',
  localFile___atimeMs = 'localFile___atimeMs',
  localFile___mtimeMs = 'localFile___mtimeMs',
  localFile___ctimeMs = 'localFile___ctimeMs',
  localFile___atime = 'localFile___atime',
  localFile___mtime = 'localFile___mtime',
  localFile___ctime = 'localFile___ctime',
  localFile___birthtime = 'localFile___birthtime',
  localFile___birthtimeMs = 'localFile___birthtimeMs',
  localFile___blksize = 'localFile___blksize',
  localFile___blocks = 'localFile___blocks',
  localFile___url = 'localFile___url',
  localFile___publicURL = 'localFile___publicURL',
  localFile___childrenImageSharp = 'localFile___childrenImageSharp',
  localFile___childrenImageSharp___fixed___base64 = 'localFile___childrenImageSharp___fixed___base64',
  localFile___childrenImageSharp___fixed___tracedSVG = 'localFile___childrenImageSharp___fixed___tracedSVG',
  localFile___childrenImageSharp___fixed___aspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  localFile___childrenImageSharp___fixed___width = 'localFile___childrenImageSharp___fixed___width',
  localFile___childrenImageSharp___fixed___height = 'localFile___childrenImageSharp___fixed___height',
  localFile___childrenImageSharp___fixed___src = 'localFile___childrenImageSharp___fixed___src',
  localFile___childrenImageSharp___fixed___srcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  localFile___childrenImageSharp___fixed___srcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  localFile___childrenImageSharp___fixed___srcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  localFile___childrenImageSharp___fixed___originalName = 'localFile___childrenImageSharp___fixed___originalName',
  localFile___childrenImageSharp___fluid___base64 = 'localFile___childrenImageSharp___fluid___base64',
  localFile___childrenImageSharp___fluid___tracedSVG = 'localFile___childrenImageSharp___fluid___tracedSVG',
  localFile___childrenImageSharp___fluid___aspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  localFile___childrenImageSharp___fluid___src = 'localFile___childrenImageSharp___fluid___src',
  localFile___childrenImageSharp___fluid___srcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  localFile___childrenImageSharp___fluid___srcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  localFile___childrenImageSharp___fluid___srcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  localFile___childrenImageSharp___fluid___sizes = 'localFile___childrenImageSharp___fluid___sizes',
  localFile___childrenImageSharp___fluid___originalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  localFile___childrenImageSharp___fluid___originalName = 'localFile___childrenImageSharp___fluid___originalName',
  localFile___childrenImageSharp___fluid___presentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  localFile___childrenImageSharp___fluid___presentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  localFile___childrenImageSharp___gatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  localFile___childrenImageSharp___original___width = 'localFile___childrenImageSharp___original___width',
  localFile___childrenImageSharp___original___height = 'localFile___childrenImageSharp___original___height',
  localFile___childrenImageSharp___original___src = 'localFile___childrenImageSharp___original___src',
  localFile___childrenImageSharp___resize___src = 'localFile___childrenImageSharp___resize___src',
  localFile___childrenImageSharp___resize___tracedSVG = 'localFile___childrenImageSharp___resize___tracedSVG',
  localFile___childrenImageSharp___resize___width = 'localFile___childrenImageSharp___resize___width',
  localFile___childrenImageSharp___resize___height = 'localFile___childrenImageSharp___resize___height',
  localFile___childrenImageSharp___resize___aspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  localFile___childrenImageSharp___resize___originalName = 'localFile___childrenImageSharp___resize___originalName',
  localFile___childrenImageSharp___id = 'localFile___childrenImageSharp___id',
  localFile___childrenImageSharp___parent___id = 'localFile___childrenImageSharp___parent___id',
  localFile___childrenImageSharp___parent___children = 'localFile___childrenImageSharp___parent___children',
  localFile___childrenImageSharp___children = 'localFile___childrenImageSharp___children',
  localFile___childrenImageSharp___children___id = 'localFile___childrenImageSharp___children___id',
  localFile___childrenImageSharp___children___children = 'localFile___childrenImageSharp___children___children',
  localFile___childrenImageSharp___internal___content = 'localFile___childrenImageSharp___internal___content',
  localFile___childrenImageSharp___internal___contentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  localFile___childrenImageSharp___internal___description = 'localFile___childrenImageSharp___internal___description',
  localFile___childrenImageSharp___internal___fieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  localFile___childrenImageSharp___internal___ignoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  localFile___childrenImageSharp___internal___mediaType = 'localFile___childrenImageSharp___internal___mediaType',
  localFile___childrenImageSharp___internal___owner = 'localFile___childrenImageSharp___internal___owner',
  localFile___childrenImageSharp___internal___type = 'localFile___childrenImageSharp___internal___type',
  localFile___childImageSharp___fixed___base64 = 'localFile___childImageSharp___fixed___base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile___childImageSharp___fixed___tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile___childImageSharp___fixed___width',
  localFile___childImageSharp___fixed___height = 'localFile___childImageSharp___fixed___height',
  localFile___childImageSharp___fixed___src = 'localFile___childImageSharp___fixed___src',
  localFile___childImageSharp___fixed___srcSet = 'localFile___childImageSharp___fixed___srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile___childImageSharp___fixed___originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile___childImageSharp___fluid___base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile___childImageSharp___fluid___tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile___childImageSharp___fluid___src',
  localFile___childImageSharp___fluid___srcSet = 'localFile___childImageSharp___fluid___srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile___childImageSharp___fluid___sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile___childImageSharp___fluid___originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile___childImageSharp___fluid___originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  localFile___childImageSharp___gatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  localFile___childImageSharp___original___width = 'localFile___childImageSharp___original___width',
  localFile___childImageSharp___original___height = 'localFile___childImageSharp___original___height',
  localFile___childImageSharp___original___src = 'localFile___childImageSharp___original___src',
  localFile___childImageSharp___resize___src = 'localFile___childImageSharp___resize___src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile___childImageSharp___resize___tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile___childImageSharp___resize___width',
  localFile___childImageSharp___resize___height = 'localFile___childImageSharp___resize___height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile___childImageSharp___resize___originalName',
  localFile___childImageSharp___id = 'localFile___childImageSharp___id',
  localFile___childImageSharp___parent___id = 'localFile___childImageSharp___parent___id',
  localFile___childImageSharp___parent___children = 'localFile___childImageSharp___parent___children',
  localFile___childImageSharp___children = 'localFile___childImageSharp___children',
  localFile___childImageSharp___children___id = 'localFile___childImageSharp___children___id',
  localFile___childImageSharp___children___children = 'localFile___childImageSharp___children___children',
  localFile___childImageSharp___internal___content = 'localFile___childImageSharp___internal___content',
  localFile___childImageSharp___internal___contentDigest = 'localFile___childImageSharp___internal___contentDigest',
  localFile___childImageSharp___internal___description = 'localFile___childImageSharp___internal___description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile___childImageSharp___internal___ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile___childImageSharp___internal___mediaType',
  localFile___childImageSharp___internal___owner = 'localFile___childImageSharp___internal___owner',
  localFile___childImageSharp___internal___type = 'localFile___childImageSharp___internal___type',
  localFile___id = 'localFile___id',
  localFile___parent___id = 'localFile___parent___id',
  localFile___parent___parent___id = 'localFile___parent___parent___id',
  localFile___parent___parent___children = 'localFile___parent___parent___children',
  localFile___parent___children = 'localFile___parent___children',
  localFile___parent___children___id = 'localFile___parent___children___id',
  localFile___parent___children___children = 'localFile___parent___children___children',
  localFile___parent___internal___content = 'localFile___parent___internal___content',
  localFile___parent___internal___contentDigest = 'localFile___parent___internal___contentDigest',
  localFile___parent___internal___description = 'localFile___parent___internal___description',
  localFile___parent___internal___fieldOwners = 'localFile___parent___internal___fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile___parent___internal___ignoreType',
  localFile___parent___internal___mediaType = 'localFile___parent___internal___mediaType',
  localFile___parent___internal___owner = 'localFile___parent___internal___owner',
  localFile___parent___internal___type = 'localFile___parent___internal___type',
  localFile___children = 'localFile___children',
  localFile___children___id = 'localFile___children___id',
  localFile___children___parent___id = 'localFile___children___parent___id',
  localFile___children___parent___children = 'localFile___children___parent___children',
  localFile___children___children = 'localFile___children___children',
  localFile___children___children___id = 'localFile___children___children___id',
  localFile___children___children___children = 'localFile___children___children___children',
  localFile___children___internal___content = 'localFile___children___internal___content',
  localFile___children___internal___contentDigest = 'localFile___children___internal___contentDigest',
  localFile___children___internal___description = 'localFile___children___internal___description',
  localFile___children___internal___fieldOwners = 'localFile___children___internal___fieldOwners',
  localFile___children___internal___ignoreType = 'localFile___children___internal___ignoreType',
  localFile___children___internal___mediaType = 'localFile___children___internal___mediaType',
  localFile___children___internal___owner = 'localFile___children___internal___owner',
  localFile___children___internal___type = 'localFile___children___internal___type',
  localFile___internal___content = 'localFile___internal___content',
  localFile___internal___contentDigest = 'localFile___internal___contentDigest',
  localFile___internal___description = 'localFile___internal___description',
  localFile___internal___fieldOwners = 'localFile___internal___fieldOwners',
  localFile___internal___ignoreType = 'localFile___internal___ignoreType',
  localFile___internal___mediaType = 'localFile___internal___mediaType',
  localFile___internal___owner = 'localFile___internal___owner',
  localFile___internal___type = 'localFile___internal___type',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  gatsbyImageData = 'gatsbyImageData',
  resize___base64 = 'resize___base64',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___src = 'resize___src',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile'
  url?: Maybe<Scalars['String']>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails'
  size?: Maybe<Scalars['Int']>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage'
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  localFile?: Maybe<FileFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
}

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
}

export type ContentfulContact = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulContact'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    heading?: Maybe<Scalars['String']>
    value?: Maybe<ContentfulContactValue>
    icon?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulContactSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulContactCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulContactUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulContactConnection = {
  __typename?: 'ContentfulContactConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContactEdge>
  nodes: Array<ContentfulContact>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulContactGroupConnection>
}

export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum
}

export type ContentfulContactConnectionMaxArgs = {
  field: ContentfulContactFieldsEnum
}

export type ContentfulContactConnectionMinArgs = {
  field: ContentfulContactFieldsEnum
}

export type ContentfulContactConnectionSumArgs = {
  field: ContentfulContactFieldsEnum
}

export type ContentfulContactConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContactFieldsEnum
}

export type ContentfulContactEdge = {
  __typename?: 'ContentfulContactEdge'
  next?: Maybe<ContentfulContact>
  node: ContentfulContact
  previous?: Maybe<ContentfulContact>
}

export enum ContentfulContactFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  heading = 'heading',
  value___raw = 'value___raw',
  icon = 'icon',
  slug = 'slug',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulContactFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  heading?: Maybe<StringQueryOperatorInput>
  value?: Maybe<ContentfulContactValueFilterInput>
  icon?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulContactGroupConnection = {
  __typename?: 'ContentfulContactGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContactEdge>
  nodes: Array<ContentfulContact>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContactSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContactFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContactSys = {
  __typename?: 'ContentfulContactSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulContactSysContentType>
}

export type ContentfulContactSysContentType = {
  __typename?: 'ContentfulContactSysContentType'
  sys?: Maybe<ContentfulContactSysContentTypeSys>
}

export type ContentfulContactSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulContactSysContentTypeSysFilterInput>
}

export type ContentfulContactSysContentTypeSys = {
  __typename?: 'ContentfulContactSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulContactSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContactSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulContactSysContentTypeFilterInput>
}

export type ContentfulContactValue = {
  __typename?: 'ContentfulContactValue'
  raw?: Maybe<Scalars['String']>
}

export type ContentfulContactValueFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  displayField?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulContentTypeSys>
}

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge'
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEntry = {
  contentful_id: Scalars['String']
  id: Scalars['ID']
  node_locale: Scalars['String']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulEntryGroupConnection>
}

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge'
  next?: Maybe<ContentfulEntry>
  node: ContentfulEntry
  previous?: Maybe<ContentfulEntry>
}

export enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulExperience = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulExperience'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    companyName?: Maybe<Scalars['String']>
    companyLink?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    type?: Maybe<Scalars['String']>
    description?: Maybe<ContentfulExperienceDescription>
    dateStart?: Maybe<Scalars['Date']>
    dateEnd?: Maybe<Scalars['Date']>
    slug?: Maybe<Scalars['String']>
    companyLogo?: Maybe<ContentfulAsset>
    icons?: Maybe<ContentfulExperienceIconsJsonNode>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulExperienceSys>
    /** Returns all children nodes filtered by type contentfulExperienceIconsJsonNode */
    childrenContentfulExperienceIconsJsonNode?: Maybe<
      Array<Maybe<ContentfulExperienceIconsJsonNode>>
    >
    /** Returns the first child node of type contentfulExperienceIconsJsonNode or null if there are no children of given type on this node */
    childContentfulExperienceIconsJsonNode?: Maybe<
      ContentfulExperienceIconsJsonNode
    >
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulExperienceDateStartArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulExperienceDateEndArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulExperienceCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulExperienceUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulExperienceConnection = {
  __typename?: 'ContentfulExperienceConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulExperienceEdge>
  nodes: Array<ContentfulExperience>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulExperienceGroupConnection>
}

export type ContentfulExperienceConnectionDistinctArgs = {
  field: ContentfulExperienceFieldsEnum
}

export type ContentfulExperienceConnectionMaxArgs = {
  field: ContentfulExperienceFieldsEnum
}

export type ContentfulExperienceConnectionMinArgs = {
  field: ContentfulExperienceFieldsEnum
}

export type ContentfulExperienceConnectionSumArgs = {
  field: ContentfulExperienceFieldsEnum
}

export type ContentfulExperienceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulExperienceFieldsEnum
}

export type ContentfulExperienceDescription = {
  __typename?: 'ContentfulExperienceDescription'
  raw?: Maybe<Scalars['String']>
}

export type ContentfulExperienceDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>
}

export type ContentfulExperienceEdge = {
  __typename?: 'ContentfulExperienceEdge'
  next?: Maybe<ContentfulExperience>
  node: ContentfulExperience
  previous?: Maybe<ContentfulExperience>
}

export enum ContentfulExperienceFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  companyName = 'companyName',
  companyLink = 'companyLink',
  title = 'title',
  type = 'type',
  description___raw = 'description___raw',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
  slug = 'slug',
  companyLogo___contentful_id = 'companyLogo___contentful_id',
  companyLogo___id = 'companyLogo___id',
  companyLogo___spaceId = 'companyLogo___spaceId',
  companyLogo___createdAt = 'companyLogo___createdAt',
  companyLogo___updatedAt = 'companyLogo___updatedAt',
  companyLogo___file___url = 'companyLogo___file___url',
  companyLogo___file___details___size = 'companyLogo___file___details___size',
  companyLogo___file___fileName = 'companyLogo___file___fileName',
  companyLogo___file___contentType = 'companyLogo___file___contentType',
  companyLogo___title = 'companyLogo___title',
  companyLogo___description = 'companyLogo___description',
  companyLogo___node_locale = 'companyLogo___node_locale',
  companyLogo___sys___type = 'companyLogo___sys___type',
  companyLogo___sys___revision = 'companyLogo___sys___revision',
  companyLogo___localFile___sourceInstanceName = 'companyLogo___localFile___sourceInstanceName',
  companyLogo___localFile___absolutePath = 'companyLogo___localFile___absolutePath',
  companyLogo___localFile___relativePath = 'companyLogo___localFile___relativePath',
  companyLogo___localFile___extension = 'companyLogo___localFile___extension',
  companyLogo___localFile___size = 'companyLogo___localFile___size',
  companyLogo___localFile___prettySize = 'companyLogo___localFile___prettySize',
  companyLogo___localFile___modifiedTime = 'companyLogo___localFile___modifiedTime',
  companyLogo___localFile___accessTime = 'companyLogo___localFile___accessTime',
  companyLogo___localFile___changeTime = 'companyLogo___localFile___changeTime',
  companyLogo___localFile___birthTime = 'companyLogo___localFile___birthTime',
  companyLogo___localFile___root = 'companyLogo___localFile___root',
  companyLogo___localFile___dir = 'companyLogo___localFile___dir',
  companyLogo___localFile___base = 'companyLogo___localFile___base',
  companyLogo___localFile___ext = 'companyLogo___localFile___ext',
  companyLogo___localFile___name = 'companyLogo___localFile___name',
  companyLogo___localFile___relativeDirectory = 'companyLogo___localFile___relativeDirectory',
  companyLogo___localFile___dev = 'companyLogo___localFile___dev',
  companyLogo___localFile___mode = 'companyLogo___localFile___mode',
  companyLogo___localFile___nlink = 'companyLogo___localFile___nlink',
  companyLogo___localFile___uid = 'companyLogo___localFile___uid',
  companyLogo___localFile___gid = 'companyLogo___localFile___gid',
  companyLogo___localFile___rdev = 'companyLogo___localFile___rdev',
  companyLogo___localFile___ino = 'companyLogo___localFile___ino',
  companyLogo___localFile___atimeMs = 'companyLogo___localFile___atimeMs',
  companyLogo___localFile___mtimeMs = 'companyLogo___localFile___mtimeMs',
  companyLogo___localFile___ctimeMs = 'companyLogo___localFile___ctimeMs',
  companyLogo___localFile___atime = 'companyLogo___localFile___atime',
  companyLogo___localFile___mtime = 'companyLogo___localFile___mtime',
  companyLogo___localFile___ctime = 'companyLogo___localFile___ctime',
  companyLogo___localFile___birthtime = 'companyLogo___localFile___birthtime',
  companyLogo___localFile___birthtimeMs = 'companyLogo___localFile___birthtimeMs',
  companyLogo___localFile___blksize = 'companyLogo___localFile___blksize',
  companyLogo___localFile___blocks = 'companyLogo___localFile___blocks',
  companyLogo___localFile___url = 'companyLogo___localFile___url',
  companyLogo___localFile___publicURL = 'companyLogo___localFile___publicURL',
  companyLogo___localFile___childrenImageSharp = 'companyLogo___localFile___childrenImageSharp',
  companyLogo___localFile___childrenImageSharp___gatsbyImageData = 'companyLogo___localFile___childrenImageSharp___gatsbyImageData',
  companyLogo___localFile___childrenImageSharp___id = 'companyLogo___localFile___childrenImageSharp___id',
  companyLogo___localFile___childrenImageSharp___children = 'companyLogo___localFile___childrenImageSharp___children',
  companyLogo___localFile___childImageSharp___gatsbyImageData = 'companyLogo___localFile___childImageSharp___gatsbyImageData',
  companyLogo___localFile___childImageSharp___id = 'companyLogo___localFile___childImageSharp___id',
  companyLogo___localFile___childImageSharp___children = 'companyLogo___localFile___childImageSharp___children',
  companyLogo___localFile___id = 'companyLogo___localFile___id',
  companyLogo___localFile___parent___id = 'companyLogo___localFile___parent___id',
  companyLogo___localFile___parent___children = 'companyLogo___localFile___parent___children',
  companyLogo___localFile___children = 'companyLogo___localFile___children',
  companyLogo___localFile___children___id = 'companyLogo___localFile___children___id',
  companyLogo___localFile___children___children = 'companyLogo___localFile___children___children',
  companyLogo___localFile___internal___content = 'companyLogo___localFile___internal___content',
  companyLogo___localFile___internal___contentDigest = 'companyLogo___localFile___internal___contentDigest',
  companyLogo___localFile___internal___description = 'companyLogo___localFile___internal___description',
  companyLogo___localFile___internal___fieldOwners = 'companyLogo___localFile___internal___fieldOwners',
  companyLogo___localFile___internal___ignoreType = 'companyLogo___localFile___internal___ignoreType',
  companyLogo___localFile___internal___mediaType = 'companyLogo___localFile___internal___mediaType',
  companyLogo___localFile___internal___owner = 'companyLogo___localFile___internal___owner',
  companyLogo___localFile___internal___type = 'companyLogo___localFile___internal___type',
  companyLogo___fixed___base64 = 'companyLogo___fixed___base64',
  companyLogo___fixed___tracedSVG = 'companyLogo___fixed___tracedSVG',
  companyLogo___fixed___aspectRatio = 'companyLogo___fixed___aspectRatio',
  companyLogo___fixed___width = 'companyLogo___fixed___width',
  companyLogo___fixed___height = 'companyLogo___fixed___height',
  companyLogo___fixed___src = 'companyLogo___fixed___src',
  companyLogo___fixed___srcSet = 'companyLogo___fixed___srcSet',
  companyLogo___fixed___srcWebp = 'companyLogo___fixed___srcWebp',
  companyLogo___fixed___srcSetWebp = 'companyLogo___fixed___srcSetWebp',
  companyLogo___fluid___base64 = 'companyLogo___fluid___base64',
  companyLogo___fluid___tracedSVG = 'companyLogo___fluid___tracedSVG',
  companyLogo___fluid___aspectRatio = 'companyLogo___fluid___aspectRatio',
  companyLogo___fluid___src = 'companyLogo___fluid___src',
  companyLogo___fluid___srcSet = 'companyLogo___fluid___srcSet',
  companyLogo___fluid___srcWebp = 'companyLogo___fluid___srcWebp',
  companyLogo___fluid___srcSetWebp = 'companyLogo___fluid___srcSetWebp',
  companyLogo___fluid___sizes = 'companyLogo___fluid___sizes',
  companyLogo___gatsbyImageData = 'companyLogo___gatsbyImageData',
  companyLogo___resize___base64 = 'companyLogo___resize___base64',
  companyLogo___resize___tracedSVG = 'companyLogo___resize___tracedSVG',
  companyLogo___resize___src = 'companyLogo___resize___src',
  companyLogo___resize___width = 'companyLogo___resize___width',
  companyLogo___resize___height = 'companyLogo___resize___height',
  companyLogo___resize___aspectRatio = 'companyLogo___resize___aspectRatio',
  companyLogo___parent___id = 'companyLogo___parent___id',
  companyLogo___parent___parent___id = 'companyLogo___parent___parent___id',
  companyLogo___parent___parent___children = 'companyLogo___parent___parent___children',
  companyLogo___parent___children = 'companyLogo___parent___children',
  companyLogo___parent___children___id = 'companyLogo___parent___children___id',
  companyLogo___parent___children___children = 'companyLogo___parent___children___children',
  companyLogo___parent___internal___content = 'companyLogo___parent___internal___content',
  companyLogo___parent___internal___contentDigest = 'companyLogo___parent___internal___contentDigest',
  companyLogo___parent___internal___description = 'companyLogo___parent___internal___description',
  companyLogo___parent___internal___fieldOwners = 'companyLogo___parent___internal___fieldOwners',
  companyLogo___parent___internal___ignoreType = 'companyLogo___parent___internal___ignoreType',
  companyLogo___parent___internal___mediaType = 'companyLogo___parent___internal___mediaType',
  companyLogo___parent___internal___owner = 'companyLogo___parent___internal___owner',
  companyLogo___parent___internal___type = 'companyLogo___parent___internal___type',
  companyLogo___children = 'companyLogo___children',
  companyLogo___children___id = 'companyLogo___children___id',
  companyLogo___children___parent___id = 'companyLogo___children___parent___id',
  companyLogo___children___parent___children = 'companyLogo___children___parent___children',
  companyLogo___children___children = 'companyLogo___children___children',
  companyLogo___children___children___id = 'companyLogo___children___children___id',
  companyLogo___children___children___children = 'companyLogo___children___children___children',
  companyLogo___children___internal___content = 'companyLogo___children___internal___content',
  companyLogo___children___internal___contentDigest = 'companyLogo___children___internal___contentDigest',
  companyLogo___children___internal___description = 'companyLogo___children___internal___description',
  companyLogo___children___internal___fieldOwners = 'companyLogo___children___internal___fieldOwners',
  companyLogo___children___internal___ignoreType = 'companyLogo___children___internal___ignoreType',
  companyLogo___children___internal___mediaType = 'companyLogo___children___internal___mediaType',
  companyLogo___children___internal___owner = 'companyLogo___children___internal___owner',
  companyLogo___children___internal___type = 'companyLogo___children___internal___type',
  companyLogo___internal___content = 'companyLogo___internal___content',
  companyLogo___internal___contentDigest = 'companyLogo___internal___contentDigest',
  companyLogo___internal___description = 'companyLogo___internal___description',
  companyLogo___internal___fieldOwners = 'companyLogo___internal___fieldOwners',
  companyLogo___internal___ignoreType = 'companyLogo___internal___ignoreType',
  companyLogo___internal___mediaType = 'companyLogo___internal___mediaType',
  companyLogo___internal___owner = 'companyLogo___internal___owner',
  companyLogo___internal___type = 'companyLogo___internal___type',
  icons___id = 'icons___id',
  icons___parent___id = 'icons___parent___id',
  icons___parent___parent___id = 'icons___parent___parent___id',
  icons___parent___parent___children = 'icons___parent___parent___children',
  icons___parent___children = 'icons___parent___children',
  icons___parent___children___id = 'icons___parent___children___id',
  icons___parent___children___children = 'icons___parent___children___children',
  icons___parent___internal___content = 'icons___parent___internal___content',
  icons___parent___internal___contentDigest = 'icons___parent___internal___contentDigest',
  icons___parent___internal___description = 'icons___parent___internal___description',
  icons___parent___internal___fieldOwners = 'icons___parent___internal___fieldOwners',
  icons___parent___internal___ignoreType = 'icons___parent___internal___ignoreType',
  icons___parent___internal___mediaType = 'icons___parent___internal___mediaType',
  icons___parent___internal___owner = 'icons___parent___internal___owner',
  icons___parent___internal___type = 'icons___parent___internal___type',
  icons___children = 'icons___children',
  icons___children___id = 'icons___children___id',
  icons___children___parent___id = 'icons___children___parent___id',
  icons___children___parent___children = 'icons___children___parent___children',
  icons___children___children = 'icons___children___children',
  icons___children___children___id = 'icons___children___children___id',
  icons___children___children___children = 'icons___children___children___children',
  icons___children___internal___content = 'icons___children___internal___content',
  icons___children___internal___contentDigest = 'icons___children___internal___contentDigest',
  icons___children___internal___description = 'icons___children___internal___description',
  icons___children___internal___fieldOwners = 'icons___children___internal___fieldOwners',
  icons___children___internal___ignoreType = 'icons___children___internal___ignoreType',
  icons___children___internal___mediaType = 'icons___children___internal___mediaType',
  icons___children___internal___owner = 'icons___children___internal___owner',
  icons___children___internal___type = 'icons___children___internal___type',
  icons___internal___content = 'icons___internal___content',
  icons___internal___contentDigest = 'icons___internal___contentDigest',
  icons___internal___description = 'icons___internal___description',
  icons___internal___fieldOwners = 'icons___internal___fieldOwners',
  icons___internal___ignoreType = 'icons___internal___ignoreType',
  icons___internal___mediaType = 'icons___internal___mediaType',
  icons___internal___owner = 'icons___internal___owner',
  icons___internal___type = 'icons___internal___type',
  icons___data = 'icons___data',
  icons___data___icon = 'icons___data___icon',
  icons___data___name = 'icons___data___name',
  icons___sys___type = 'icons___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  childrenContentfulExperienceIconsJsonNode = 'childrenContentfulExperienceIconsJsonNode',
  childrenContentfulExperienceIconsJsonNode___id = 'childrenContentfulExperienceIconsJsonNode___id',
  childrenContentfulExperienceIconsJsonNode___parent___id = 'childrenContentfulExperienceIconsJsonNode___parent___id',
  childrenContentfulExperienceIconsJsonNode___parent___parent___id = 'childrenContentfulExperienceIconsJsonNode___parent___parent___id',
  childrenContentfulExperienceIconsJsonNode___parent___parent___children = 'childrenContentfulExperienceIconsJsonNode___parent___parent___children',
  childrenContentfulExperienceIconsJsonNode___parent___children = 'childrenContentfulExperienceIconsJsonNode___parent___children',
  childrenContentfulExperienceIconsJsonNode___parent___children___id = 'childrenContentfulExperienceIconsJsonNode___parent___children___id',
  childrenContentfulExperienceIconsJsonNode___parent___children___children = 'childrenContentfulExperienceIconsJsonNode___parent___children___children',
  childrenContentfulExperienceIconsJsonNode___parent___internal___content = 'childrenContentfulExperienceIconsJsonNode___parent___internal___content',
  childrenContentfulExperienceIconsJsonNode___parent___internal___contentDigest = 'childrenContentfulExperienceIconsJsonNode___parent___internal___contentDigest',
  childrenContentfulExperienceIconsJsonNode___parent___internal___description = 'childrenContentfulExperienceIconsJsonNode___parent___internal___description',
  childrenContentfulExperienceIconsJsonNode___parent___internal___fieldOwners = 'childrenContentfulExperienceIconsJsonNode___parent___internal___fieldOwners',
  childrenContentfulExperienceIconsJsonNode___parent___internal___ignoreType = 'childrenContentfulExperienceIconsJsonNode___parent___internal___ignoreType',
  childrenContentfulExperienceIconsJsonNode___parent___internal___mediaType = 'childrenContentfulExperienceIconsJsonNode___parent___internal___mediaType',
  childrenContentfulExperienceIconsJsonNode___parent___internal___owner = 'childrenContentfulExperienceIconsJsonNode___parent___internal___owner',
  childrenContentfulExperienceIconsJsonNode___parent___internal___type = 'childrenContentfulExperienceIconsJsonNode___parent___internal___type',
  childrenContentfulExperienceIconsJsonNode___children = 'childrenContentfulExperienceIconsJsonNode___children',
  childrenContentfulExperienceIconsJsonNode___children___id = 'childrenContentfulExperienceIconsJsonNode___children___id',
  childrenContentfulExperienceIconsJsonNode___children___parent___id = 'childrenContentfulExperienceIconsJsonNode___children___parent___id',
  childrenContentfulExperienceIconsJsonNode___children___parent___children = 'childrenContentfulExperienceIconsJsonNode___children___parent___children',
  childrenContentfulExperienceIconsJsonNode___children___children = 'childrenContentfulExperienceIconsJsonNode___children___children',
  childrenContentfulExperienceIconsJsonNode___children___children___id = 'childrenContentfulExperienceIconsJsonNode___children___children___id',
  childrenContentfulExperienceIconsJsonNode___children___children___children = 'childrenContentfulExperienceIconsJsonNode___children___children___children',
  childrenContentfulExperienceIconsJsonNode___children___internal___content = 'childrenContentfulExperienceIconsJsonNode___children___internal___content',
  childrenContentfulExperienceIconsJsonNode___children___internal___contentDigest = 'childrenContentfulExperienceIconsJsonNode___children___internal___contentDigest',
  childrenContentfulExperienceIconsJsonNode___children___internal___description = 'childrenContentfulExperienceIconsJsonNode___children___internal___description',
  childrenContentfulExperienceIconsJsonNode___children___internal___fieldOwners = 'childrenContentfulExperienceIconsJsonNode___children___internal___fieldOwners',
  childrenContentfulExperienceIconsJsonNode___children___internal___ignoreType = 'childrenContentfulExperienceIconsJsonNode___children___internal___ignoreType',
  childrenContentfulExperienceIconsJsonNode___children___internal___mediaType = 'childrenContentfulExperienceIconsJsonNode___children___internal___mediaType',
  childrenContentfulExperienceIconsJsonNode___children___internal___owner = 'childrenContentfulExperienceIconsJsonNode___children___internal___owner',
  childrenContentfulExperienceIconsJsonNode___children___internal___type = 'childrenContentfulExperienceIconsJsonNode___children___internal___type',
  childrenContentfulExperienceIconsJsonNode___internal___content = 'childrenContentfulExperienceIconsJsonNode___internal___content',
  childrenContentfulExperienceIconsJsonNode___internal___contentDigest = 'childrenContentfulExperienceIconsJsonNode___internal___contentDigest',
  childrenContentfulExperienceIconsJsonNode___internal___description = 'childrenContentfulExperienceIconsJsonNode___internal___description',
  childrenContentfulExperienceIconsJsonNode___internal___fieldOwners = 'childrenContentfulExperienceIconsJsonNode___internal___fieldOwners',
  childrenContentfulExperienceIconsJsonNode___internal___ignoreType = 'childrenContentfulExperienceIconsJsonNode___internal___ignoreType',
  childrenContentfulExperienceIconsJsonNode___internal___mediaType = 'childrenContentfulExperienceIconsJsonNode___internal___mediaType',
  childrenContentfulExperienceIconsJsonNode___internal___owner = 'childrenContentfulExperienceIconsJsonNode___internal___owner',
  childrenContentfulExperienceIconsJsonNode___internal___type = 'childrenContentfulExperienceIconsJsonNode___internal___type',
  childrenContentfulExperienceIconsJsonNode___data = 'childrenContentfulExperienceIconsJsonNode___data',
  childrenContentfulExperienceIconsJsonNode___data___icon = 'childrenContentfulExperienceIconsJsonNode___data___icon',
  childrenContentfulExperienceIconsJsonNode___data___name = 'childrenContentfulExperienceIconsJsonNode___data___name',
  childrenContentfulExperienceIconsJsonNode___sys___type = 'childrenContentfulExperienceIconsJsonNode___sys___type',
  childContentfulExperienceIconsJsonNode___id = 'childContentfulExperienceIconsJsonNode___id',
  childContentfulExperienceIconsJsonNode___parent___id = 'childContentfulExperienceIconsJsonNode___parent___id',
  childContentfulExperienceIconsJsonNode___parent___parent___id = 'childContentfulExperienceIconsJsonNode___parent___parent___id',
  childContentfulExperienceIconsJsonNode___parent___parent___children = 'childContentfulExperienceIconsJsonNode___parent___parent___children',
  childContentfulExperienceIconsJsonNode___parent___children = 'childContentfulExperienceIconsJsonNode___parent___children',
  childContentfulExperienceIconsJsonNode___parent___children___id = 'childContentfulExperienceIconsJsonNode___parent___children___id',
  childContentfulExperienceIconsJsonNode___parent___children___children = 'childContentfulExperienceIconsJsonNode___parent___children___children',
  childContentfulExperienceIconsJsonNode___parent___internal___content = 'childContentfulExperienceIconsJsonNode___parent___internal___content',
  childContentfulExperienceIconsJsonNode___parent___internal___contentDigest = 'childContentfulExperienceIconsJsonNode___parent___internal___contentDigest',
  childContentfulExperienceIconsJsonNode___parent___internal___description = 'childContentfulExperienceIconsJsonNode___parent___internal___description',
  childContentfulExperienceIconsJsonNode___parent___internal___fieldOwners = 'childContentfulExperienceIconsJsonNode___parent___internal___fieldOwners',
  childContentfulExperienceIconsJsonNode___parent___internal___ignoreType = 'childContentfulExperienceIconsJsonNode___parent___internal___ignoreType',
  childContentfulExperienceIconsJsonNode___parent___internal___mediaType = 'childContentfulExperienceIconsJsonNode___parent___internal___mediaType',
  childContentfulExperienceIconsJsonNode___parent___internal___owner = 'childContentfulExperienceIconsJsonNode___parent___internal___owner',
  childContentfulExperienceIconsJsonNode___parent___internal___type = 'childContentfulExperienceIconsJsonNode___parent___internal___type',
  childContentfulExperienceIconsJsonNode___children = 'childContentfulExperienceIconsJsonNode___children',
  childContentfulExperienceIconsJsonNode___children___id = 'childContentfulExperienceIconsJsonNode___children___id',
  childContentfulExperienceIconsJsonNode___children___parent___id = 'childContentfulExperienceIconsJsonNode___children___parent___id',
  childContentfulExperienceIconsJsonNode___children___parent___children = 'childContentfulExperienceIconsJsonNode___children___parent___children',
  childContentfulExperienceIconsJsonNode___children___children = 'childContentfulExperienceIconsJsonNode___children___children',
  childContentfulExperienceIconsJsonNode___children___children___id = 'childContentfulExperienceIconsJsonNode___children___children___id',
  childContentfulExperienceIconsJsonNode___children___children___children = 'childContentfulExperienceIconsJsonNode___children___children___children',
  childContentfulExperienceIconsJsonNode___children___internal___content = 'childContentfulExperienceIconsJsonNode___children___internal___content',
  childContentfulExperienceIconsJsonNode___children___internal___contentDigest = 'childContentfulExperienceIconsJsonNode___children___internal___contentDigest',
  childContentfulExperienceIconsJsonNode___children___internal___description = 'childContentfulExperienceIconsJsonNode___children___internal___description',
  childContentfulExperienceIconsJsonNode___children___internal___fieldOwners = 'childContentfulExperienceIconsJsonNode___children___internal___fieldOwners',
  childContentfulExperienceIconsJsonNode___children___internal___ignoreType = 'childContentfulExperienceIconsJsonNode___children___internal___ignoreType',
  childContentfulExperienceIconsJsonNode___children___internal___mediaType = 'childContentfulExperienceIconsJsonNode___children___internal___mediaType',
  childContentfulExperienceIconsJsonNode___children___internal___owner = 'childContentfulExperienceIconsJsonNode___children___internal___owner',
  childContentfulExperienceIconsJsonNode___children___internal___type = 'childContentfulExperienceIconsJsonNode___children___internal___type',
  childContentfulExperienceIconsJsonNode___internal___content = 'childContentfulExperienceIconsJsonNode___internal___content',
  childContentfulExperienceIconsJsonNode___internal___contentDigest = 'childContentfulExperienceIconsJsonNode___internal___contentDigest',
  childContentfulExperienceIconsJsonNode___internal___description = 'childContentfulExperienceIconsJsonNode___internal___description',
  childContentfulExperienceIconsJsonNode___internal___fieldOwners = 'childContentfulExperienceIconsJsonNode___internal___fieldOwners',
  childContentfulExperienceIconsJsonNode___internal___ignoreType = 'childContentfulExperienceIconsJsonNode___internal___ignoreType',
  childContentfulExperienceIconsJsonNode___internal___mediaType = 'childContentfulExperienceIconsJsonNode___internal___mediaType',
  childContentfulExperienceIconsJsonNode___internal___owner = 'childContentfulExperienceIconsJsonNode___internal___owner',
  childContentfulExperienceIconsJsonNode___internal___type = 'childContentfulExperienceIconsJsonNode___internal___type',
  childContentfulExperienceIconsJsonNode___data = 'childContentfulExperienceIconsJsonNode___data',
  childContentfulExperienceIconsJsonNode___data___icon = 'childContentfulExperienceIconsJsonNode___data___icon',
  childContentfulExperienceIconsJsonNode___data___name = 'childContentfulExperienceIconsJsonNode___data___name',
  childContentfulExperienceIconsJsonNode___sys___type = 'childContentfulExperienceIconsJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulExperienceFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  companyLink?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  description?: Maybe<ContentfulExperienceDescriptionFilterInput>
  dateStart?: Maybe<DateQueryOperatorInput>
  dateEnd?: Maybe<DateQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  companyLogo?: Maybe<ContentfulAssetFilterInput>
  icons?: Maybe<ContentfulExperienceIconsJsonNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulExperienceSysFilterInput>
  childrenContentfulExperienceIconsJsonNode?: Maybe<
    ContentfulExperienceIconsJsonNodeFilterListInput
  >
  childContentfulExperienceIconsJsonNode?: Maybe<
    ContentfulExperienceIconsJsonNodeFilterInput
  >
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulExperienceGroupConnection = {
  __typename?: 'ContentfulExperienceGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulExperienceEdge>
  nodes: Array<ContentfulExperience>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulExperienceSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulExperienceFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulExperienceSys = {
  __typename?: 'ContentfulExperienceSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulExperienceSysContentType>
}

export type ContentfulExperienceSysContentType = {
  __typename?: 'ContentfulExperienceSysContentType'
  sys?: Maybe<ContentfulExperienceSysContentTypeSys>
}

export type ContentfulExperienceSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulExperienceSysContentTypeSysFilterInput>
}

export type ContentfulExperienceSysContentTypeSys = {
  __typename?: 'ContentfulExperienceSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulExperienceSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulExperienceSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulExperienceSysContentTypeFilterInput>
}

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export enum ContentfulImageCropFocus {
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  FACE = 'FACE',
  FACES = 'FACES',
  CENTER = 'CENTER'
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ContentfulImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ContentfulImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export type ContentfulMediaLink = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulMediaLink'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    name?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    link?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulMediaLinkSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulMediaLinkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulMediaLinkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulMediaLinkConnection = {
  __typename?: 'ContentfulMediaLinkConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulMediaLinkEdge>
  nodes: Array<ContentfulMediaLink>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulMediaLinkGroupConnection>
}

export type ContentfulMediaLinkConnectionDistinctArgs = {
  field: ContentfulMediaLinkFieldsEnum
}

export type ContentfulMediaLinkConnectionMaxArgs = {
  field: ContentfulMediaLinkFieldsEnum
}

export type ContentfulMediaLinkConnectionMinArgs = {
  field: ContentfulMediaLinkFieldsEnum
}

export type ContentfulMediaLinkConnectionSumArgs = {
  field: ContentfulMediaLinkFieldsEnum
}

export type ContentfulMediaLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulMediaLinkFieldsEnum
}

export type ContentfulMediaLinkEdge = {
  __typename?: 'ContentfulMediaLinkEdge'
  next?: Maybe<ContentfulMediaLink>
  node: ContentfulMediaLink
  previous?: Maybe<ContentfulMediaLink>
}

export enum ContentfulMediaLinkFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  icon = 'icon',
  link = 'link',
  slug = 'slug',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulMediaLinkFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  link?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulMediaLinkSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulMediaLinkGroupConnection = {
  __typename?: 'ContentfulMediaLinkGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulMediaLinkEdge>
  nodes: Array<ContentfulMediaLink>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulMediaLinkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMediaLinkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulMediaLinkSys = {
  __typename?: 'ContentfulMediaLinkSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulMediaLinkSysContentType>
}

export type ContentfulMediaLinkSysContentType = {
  __typename?: 'ContentfulMediaLinkSysContentType'
  sys?: Maybe<ContentfulMediaLinkSysContentTypeSys>
}

export type ContentfulMediaLinkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMediaLinkSysContentTypeSysFilterInput>
}

export type ContentfulMediaLinkSysContentTypeSys = {
  __typename?: 'ContentfulMediaLinkSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulMediaLinkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulMediaLinkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulMediaLinkSysContentTypeFilterInput>
}

export type ContentfulReference = {
  contentful_id: Scalars['String']
  id: Scalars['ID']
}

export type ContentfulResize = {
  __typename?: 'ContentfulResize'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulSiteConfiguration = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulSiteConfiguration'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    slug?: Maybe<Scalars['String']>
    backgroundHome?: Maybe<ContentfulAsset>
    backgroundExperience?: Maybe<ContentfulAsset>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulSiteConfigurationSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulSiteConfigurationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSiteConfigurationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSiteConfigurationConnection = {
  __typename?: 'ContentfulSiteConfigurationConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSiteConfigurationEdge>
  nodes: Array<ContentfulSiteConfiguration>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulSiteConfigurationGroupConnection>
}

export type ContentfulSiteConfigurationConnectionDistinctArgs = {
  field: ContentfulSiteConfigurationFieldsEnum
}

export type ContentfulSiteConfigurationConnectionMaxArgs = {
  field: ContentfulSiteConfigurationFieldsEnum
}

export type ContentfulSiteConfigurationConnectionMinArgs = {
  field: ContentfulSiteConfigurationFieldsEnum
}

export type ContentfulSiteConfigurationConnectionSumArgs = {
  field: ContentfulSiteConfigurationFieldsEnum
}

export type ContentfulSiteConfigurationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulSiteConfigurationFieldsEnum
}

export type ContentfulSiteConfigurationEdge = {
  __typename?: 'ContentfulSiteConfigurationEdge'
  next?: Maybe<ContentfulSiteConfiguration>
  node: ContentfulSiteConfiguration
  previous?: Maybe<ContentfulSiteConfiguration>
}

export enum ContentfulSiteConfigurationFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  slug = 'slug',
  backgroundHome___contentful_id = 'backgroundHome___contentful_id',
  backgroundHome___id = 'backgroundHome___id',
  backgroundHome___spaceId = 'backgroundHome___spaceId',
  backgroundHome___createdAt = 'backgroundHome___createdAt',
  backgroundHome___updatedAt = 'backgroundHome___updatedAt',
  backgroundHome___file___url = 'backgroundHome___file___url',
  backgroundHome___file___details___size = 'backgroundHome___file___details___size',
  backgroundHome___file___fileName = 'backgroundHome___file___fileName',
  backgroundHome___file___contentType = 'backgroundHome___file___contentType',
  backgroundHome___title = 'backgroundHome___title',
  backgroundHome___description = 'backgroundHome___description',
  backgroundHome___node_locale = 'backgroundHome___node_locale',
  backgroundHome___sys___type = 'backgroundHome___sys___type',
  backgroundHome___sys___revision = 'backgroundHome___sys___revision',
  backgroundHome___localFile___sourceInstanceName = 'backgroundHome___localFile___sourceInstanceName',
  backgroundHome___localFile___absolutePath = 'backgroundHome___localFile___absolutePath',
  backgroundHome___localFile___relativePath = 'backgroundHome___localFile___relativePath',
  backgroundHome___localFile___extension = 'backgroundHome___localFile___extension',
  backgroundHome___localFile___size = 'backgroundHome___localFile___size',
  backgroundHome___localFile___prettySize = 'backgroundHome___localFile___prettySize',
  backgroundHome___localFile___modifiedTime = 'backgroundHome___localFile___modifiedTime',
  backgroundHome___localFile___accessTime = 'backgroundHome___localFile___accessTime',
  backgroundHome___localFile___changeTime = 'backgroundHome___localFile___changeTime',
  backgroundHome___localFile___birthTime = 'backgroundHome___localFile___birthTime',
  backgroundHome___localFile___root = 'backgroundHome___localFile___root',
  backgroundHome___localFile___dir = 'backgroundHome___localFile___dir',
  backgroundHome___localFile___base = 'backgroundHome___localFile___base',
  backgroundHome___localFile___ext = 'backgroundHome___localFile___ext',
  backgroundHome___localFile___name = 'backgroundHome___localFile___name',
  backgroundHome___localFile___relativeDirectory = 'backgroundHome___localFile___relativeDirectory',
  backgroundHome___localFile___dev = 'backgroundHome___localFile___dev',
  backgroundHome___localFile___mode = 'backgroundHome___localFile___mode',
  backgroundHome___localFile___nlink = 'backgroundHome___localFile___nlink',
  backgroundHome___localFile___uid = 'backgroundHome___localFile___uid',
  backgroundHome___localFile___gid = 'backgroundHome___localFile___gid',
  backgroundHome___localFile___rdev = 'backgroundHome___localFile___rdev',
  backgroundHome___localFile___ino = 'backgroundHome___localFile___ino',
  backgroundHome___localFile___atimeMs = 'backgroundHome___localFile___atimeMs',
  backgroundHome___localFile___mtimeMs = 'backgroundHome___localFile___mtimeMs',
  backgroundHome___localFile___ctimeMs = 'backgroundHome___localFile___ctimeMs',
  backgroundHome___localFile___atime = 'backgroundHome___localFile___atime',
  backgroundHome___localFile___mtime = 'backgroundHome___localFile___mtime',
  backgroundHome___localFile___ctime = 'backgroundHome___localFile___ctime',
  backgroundHome___localFile___birthtime = 'backgroundHome___localFile___birthtime',
  backgroundHome___localFile___birthtimeMs = 'backgroundHome___localFile___birthtimeMs',
  backgroundHome___localFile___blksize = 'backgroundHome___localFile___blksize',
  backgroundHome___localFile___blocks = 'backgroundHome___localFile___blocks',
  backgroundHome___localFile___url = 'backgroundHome___localFile___url',
  backgroundHome___localFile___publicURL = 'backgroundHome___localFile___publicURL',
  backgroundHome___localFile___childrenImageSharp = 'backgroundHome___localFile___childrenImageSharp',
  backgroundHome___localFile___childrenImageSharp___gatsbyImageData = 'backgroundHome___localFile___childrenImageSharp___gatsbyImageData',
  backgroundHome___localFile___childrenImageSharp___id = 'backgroundHome___localFile___childrenImageSharp___id',
  backgroundHome___localFile___childrenImageSharp___children = 'backgroundHome___localFile___childrenImageSharp___children',
  backgroundHome___localFile___childImageSharp___gatsbyImageData = 'backgroundHome___localFile___childImageSharp___gatsbyImageData',
  backgroundHome___localFile___childImageSharp___id = 'backgroundHome___localFile___childImageSharp___id',
  backgroundHome___localFile___childImageSharp___children = 'backgroundHome___localFile___childImageSharp___children',
  backgroundHome___localFile___id = 'backgroundHome___localFile___id',
  backgroundHome___localFile___parent___id = 'backgroundHome___localFile___parent___id',
  backgroundHome___localFile___parent___children = 'backgroundHome___localFile___parent___children',
  backgroundHome___localFile___children = 'backgroundHome___localFile___children',
  backgroundHome___localFile___children___id = 'backgroundHome___localFile___children___id',
  backgroundHome___localFile___children___children = 'backgroundHome___localFile___children___children',
  backgroundHome___localFile___internal___content = 'backgroundHome___localFile___internal___content',
  backgroundHome___localFile___internal___contentDigest = 'backgroundHome___localFile___internal___contentDigest',
  backgroundHome___localFile___internal___description = 'backgroundHome___localFile___internal___description',
  backgroundHome___localFile___internal___fieldOwners = 'backgroundHome___localFile___internal___fieldOwners',
  backgroundHome___localFile___internal___ignoreType = 'backgroundHome___localFile___internal___ignoreType',
  backgroundHome___localFile___internal___mediaType = 'backgroundHome___localFile___internal___mediaType',
  backgroundHome___localFile___internal___owner = 'backgroundHome___localFile___internal___owner',
  backgroundHome___localFile___internal___type = 'backgroundHome___localFile___internal___type',
  backgroundHome___fixed___base64 = 'backgroundHome___fixed___base64',
  backgroundHome___fixed___tracedSVG = 'backgroundHome___fixed___tracedSVG',
  backgroundHome___fixed___aspectRatio = 'backgroundHome___fixed___aspectRatio',
  backgroundHome___fixed___width = 'backgroundHome___fixed___width',
  backgroundHome___fixed___height = 'backgroundHome___fixed___height',
  backgroundHome___fixed___src = 'backgroundHome___fixed___src',
  backgroundHome___fixed___srcSet = 'backgroundHome___fixed___srcSet',
  backgroundHome___fixed___srcWebp = 'backgroundHome___fixed___srcWebp',
  backgroundHome___fixed___srcSetWebp = 'backgroundHome___fixed___srcSetWebp',
  backgroundHome___fluid___base64 = 'backgroundHome___fluid___base64',
  backgroundHome___fluid___tracedSVG = 'backgroundHome___fluid___tracedSVG',
  backgroundHome___fluid___aspectRatio = 'backgroundHome___fluid___aspectRatio',
  backgroundHome___fluid___src = 'backgroundHome___fluid___src',
  backgroundHome___fluid___srcSet = 'backgroundHome___fluid___srcSet',
  backgroundHome___fluid___srcWebp = 'backgroundHome___fluid___srcWebp',
  backgroundHome___fluid___srcSetWebp = 'backgroundHome___fluid___srcSetWebp',
  backgroundHome___fluid___sizes = 'backgroundHome___fluid___sizes',
  backgroundHome___gatsbyImageData = 'backgroundHome___gatsbyImageData',
  backgroundHome___resize___base64 = 'backgroundHome___resize___base64',
  backgroundHome___resize___tracedSVG = 'backgroundHome___resize___tracedSVG',
  backgroundHome___resize___src = 'backgroundHome___resize___src',
  backgroundHome___resize___width = 'backgroundHome___resize___width',
  backgroundHome___resize___height = 'backgroundHome___resize___height',
  backgroundHome___resize___aspectRatio = 'backgroundHome___resize___aspectRatio',
  backgroundHome___parent___id = 'backgroundHome___parent___id',
  backgroundHome___parent___parent___id = 'backgroundHome___parent___parent___id',
  backgroundHome___parent___parent___children = 'backgroundHome___parent___parent___children',
  backgroundHome___parent___children = 'backgroundHome___parent___children',
  backgroundHome___parent___children___id = 'backgroundHome___parent___children___id',
  backgroundHome___parent___children___children = 'backgroundHome___parent___children___children',
  backgroundHome___parent___internal___content = 'backgroundHome___parent___internal___content',
  backgroundHome___parent___internal___contentDigest = 'backgroundHome___parent___internal___contentDigest',
  backgroundHome___parent___internal___description = 'backgroundHome___parent___internal___description',
  backgroundHome___parent___internal___fieldOwners = 'backgroundHome___parent___internal___fieldOwners',
  backgroundHome___parent___internal___ignoreType = 'backgroundHome___parent___internal___ignoreType',
  backgroundHome___parent___internal___mediaType = 'backgroundHome___parent___internal___mediaType',
  backgroundHome___parent___internal___owner = 'backgroundHome___parent___internal___owner',
  backgroundHome___parent___internal___type = 'backgroundHome___parent___internal___type',
  backgroundHome___children = 'backgroundHome___children',
  backgroundHome___children___id = 'backgroundHome___children___id',
  backgroundHome___children___parent___id = 'backgroundHome___children___parent___id',
  backgroundHome___children___parent___children = 'backgroundHome___children___parent___children',
  backgroundHome___children___children = 'backgroundHome___children___children',
  backgroundHome___children___children___id = 'backgroundHome___children___children___id',
  backgroundHome___children___children___children = 'backgroundHome___children___children___children',
  backgroundHome___children___internal___content = 'backgroundHome___children___internal___content',
  backgroundHome___children___internal___contentDigest = 'backgroundHome___children___internal___contentDigest',
  backgroundHome___children___internal___description = 'backgroundHome___children___internal___description',
  backgroundHome___children___internal___fieldOwners = 'backgroundHome___children___internal___fieldOwners',
  backgroundHome___children___internal___ignoreType = 'backgroundHome___children___internal___ignoreType',
  backgroundHome___children___internal___mediaType = 'backgroundHome___children___internal___mediaType',
  backgroundHome___children___internal___owner = 'backgroundHome___children___internal___owner',
  backgroundHome___children___internal___type = 'backgroundHome___children___internal___type',
  backgroundHome___internal___content = 'backgroundHome___internal___content',
  backgroundHome___internal___contentDigest = 'backgroundHome___internal___contentDigest',
  backgroundHome___internal___description = 'backgroundHome___internal___description',
  backgroundHome___internal___fieldOwners = 'backgroundHome___internal___fieldOwners',
  backgroundHome___internal___ignoreType = 'backgroundHome___internal___ignoreType',
  backgroundHome___internal___mediaType = 'backgroundHome___internal___mediaType',
  backgroundHome___internal___owner = 'backgroundHome___internal___owner',
  backgroundHome___internal___type = 'backgroundHome___internal___type',
  backgroundExperience___contentful_id = 'backgroundExperience___contentful_id',
  backgroundExperience___id = 'backgroundExperience___id',
  backgroundExperience___spaceId = 'backgroundExperience___spaceId',
  backgroundExperience___createdAt = 'backgroundExperience___createdAt',
  backgroundExperience___updatedAt = 'backgroundExperience___updatedAt',
  backgroundExperience___file___url = 'backgroundExperience___file___url',
  backgroundExperience___file___details___size = 'backgroundExperience___file___details___size',
  backgroundExperience___file___fileName = 'backgroundExperience___file___fileName',
  backgroundExperience___file___contentType = 'backgroundExperience___file___contentType',
  backgroundExperience___title = 'backgroundExperience___title',
  backgroundExperience___description = 'backgroundExperience___description',
  backgroundExperience___node_locale = 'backgroundExperience___node_locale',
  backgroundExperience___sys___type = 'backgroundExperience___sys___type',
  backgroundExperience___sys___revision = 'backgroundExperience___sys___revision',
  backgroundExperience___localFile___sourceInstanceName = 'backgroundExperience___localFile___sourceInstanceName',
  backgroundExperience___localFile___absolutePath = 'backgroundExperience___localFile___absolutePath',
  backgroundExperience___localFile___relativePath = 'backgroundExperience___localFile___relativePath',
  backgroundExperience___localFile___extension = 'backgroundExperience___localFile___extension',
  backgroundExperience___localFile___size = 'backgroundExperience___localFile___size',
  backgroundExperience___localFile___prettySize = 'backgroundExperience___localFile___prettySize',
  backgroundExperience___localFile___modifiedTime = 'backgroundExperience___localFile___modifiedTime',
  backgroundExperience___localFile___accessTime = 'backgroundExperience___localFile___accessTime',
  backgroundExperience___localFile___changeTime = 'backgroundExperience___localFile___changeTime',
  backgroundExperience___localFile___birthTime = 'backgroundExperience___localFile___birthTime',
  backgroundExperience___localFile___root = 'backgroundExperience___localFile___root',
  backgroundExperience___localFile___dir = 'backgroundExperience___localFile___dir',
  backgroundExperience___localFile___base = 'backgroundExperience___localFile___base',
  backgroundExperience___localFile___ext = 'backgroundExperience___localFile___ext',
  backgroundExperience___localFile___name = 'backgroundExperience___localFile___name',
  backgroundExperience___localFile___relativeDirectory = 'backgroundExperience___localFile___relativeDirectory',
  backgroundExperience___localFile___dev = 'backgroundExperience___localFile___dev',
  backgroundExperience___localFile___mode = 'backgroundExperience___localFile___mode',
  backgroundExperience___localFile___nlink = 'backgroundExperience___localFile___nlink',
  backgroundExperience___localFile___uid = 'backgroundExperience___localFile___uid',
  backgroundExperience___localFile___gid = 'backgroundExperience___localFile___gid',
  backgroundExperience___localFile___rdev = 'backgroundExperience___localFile___rdev',
  backgroundExperience___localFile___ino = 'backgroundExperience___localFile___ino',
  backgroundExperience___localFile___atimeMs = 'backgroundExperience___localFile___atimeMs',
  backgroundExperience___localFile___mtimeMs = 'backgroundExperience___localFile___mtimeMs',
  backgroundExperience___localFile___ctimeMs = 'backgroundExperience___localFile___ctimeMs',
  backgroundExperience___localFile___atime = 'backgroundExperience___localFile___atime',
  backgroundExperience___localFile___mtime = 'backgroundExperience___localFile___mtime',
  backgroundExperience___localFile___ctime = 'backgroundExperience___localFile___ctime',
  backgroundExperience___localFile___birthtime = 'backgroundExperience___localFile___birthtime',
  backgroundExperience___localFile___birthtimeMs = 'backgroundExperience___localFile___birthtimeMs',
  backgroundExperience___localFile___blksize = 'backgroundExperience___localFile___blksize',
  backgroundExperience___localFile___blocks = 'backgroundExperience___localFile___blocks',
  backgroundExperience___localFile___url = 'backgroundExperience___localFile___url',
  backgroundExperience___localFile___publicURL = 'backgroundExperience___localFile___publicURL',
  backgroundExperience___localFile___childrenImageSharp = 'backgroundExperience___localFile___childrenImageSharp',
  backgroundExperience___localFile___childrenImageSharp___gatsbyImageData = 'backgroundExperience___localFile___childrenImageSharp___gatsbyImageData',
  backgroundExperience___localFile___childrenImageSharp___id = 'backgroundExperience___localFile___childrenImageSharp___id',
  backgroundExperience___localFile___childrenImageSharp___children = 'backgroundExperience___localFile___childrenImageSharp___children',
  backgroundExperience___localFile___childImageSharp___gatsbyImageData = 'backgroundExperience___localFile___childImageSharp___gatsbyImageData',
  backgroundExperience___localFile___childImageSharp___id = 'backgroundExperience___localFile___childImageSharp___id',
  backgroundExperience___localFile___childImageSharp___children = 'backgroundExperience___localFile___childImageSharp___children',
  backgroundExperience___localFile___id = 'backgroundExperience___localFile___id',
  backgroundExperience___localFile___parent___id = 'backgroundExperience___localFile___parent___id',
  backgroundExperience___localFile___parent___children = 'backgroundExperience___localFile___parent___children',
  backgroundExperience___localFile___children = 'backgroundExperience___localFile___children',
  backgroundExperience___localFile___children___id = 'backgroundExperience___localFile___children___id',
  backgroundExperience___localFile___children___children = 'backgroundExperience___localFile___children___children',
  backgroundExperience___localFile___internal___content = 'backgroundExperience___localFile___internal___content',
  backgroundExperience___localFile___internal___contentDigest = 'backgroundExperience___localFile___internal___contentDigest',
  backgroundExperience___localFile___internal___description = 'backgroundExperience___localFile___internal___description',
  backgroundExperience___localFile___internal___fieldOwners = 'backgroundExperience___localFile___internal___fieldOwners',
  backgroundExperience___localFile___internal___ignoreType = 'backgroundExperience___localFile___internal___ignoreType',
  backgroundExperience___localFile___internal___mediaType = 'backgroundExperience___localFile___internal___mediaType',
  backgroundExperience___localFile___internal___owner = 'backgroundExperience___localFile___internal___owner',
  backgroundExperience___localFile___internal___type = 'backgroundExperience___localFile___internal___type',
  backgroundExperience___fixed___base64 = 'backgroundExperience___fixed___base64',
  backgroundExperience___fixed___tracedSVG = 'backgroundExperience___fixed___tracedSVG',
  backgroundExperience___fixed___aspectRatio = 'backgroundExperience___fixed___aspectRatio',
  backgroundExperience___fixed___width = 'backgroundExperience___fixed___width',
  backgroundExperience___fixed___height = 'backgroundExperience___fixed___height',
  backgroundExperience___fixed___src = 'backgroundExperience___fixed___src',
  backgroundExperience___fixed___srcSet = 'backgroundExperience___fixed___srcSet',
  backgroundExperience___fixed___srcWebp = 'backgroundExperience___fixed___srcWebp',
  backgroundExperience___fixed___srcSetWebp = 'backgroundExperience___fixed___srcSetWebp',
  backgroundExperience___fluid___base64 = 'backgroundExperience___fluid___base64',
  backgroundExperience___fluid___tracedSVG = 'backgroundExperience___fluid___tracedSVG',
  backgroundExperience___fluid___aspectRatio = 'backgroundExperience___fluid___aspectRatio',
  backgroundExperience___fluid___src = 'backgroundExperience___fluid___src',
  backgroundExperience___fluid___srcSet = 'backgroundExperience___fluid___srcSet',
  backgroundExperience___fluid___srcWebp = 'backgroundExperience___fluid___srcWebp',
  backgroundExperience___fluid___srcSetWebp = 'backgroundExperience___fluid___srcSetWebp',
  backgroundExperience___fluid___sizes = 'backgroundExperience___fluid___sizes',
  backgroundExperience___gatsbyImageData = 'backgroundExperience___gatsbyImageData',
  backgroundExperience___resize___base64 = 'backgroundExperience___resize___base64',
  backgroundExperience___resize___tracedSVG = 'backgroundExperience___resize___tracedSVG',
  backgroundExperience___resize___src = 'backgroundExperience___resize___src',
  backgroundExperience___resize___width = 'backgroundExperience___resize___width',
  backgroundExperience___resize___height = 'backgroundExperience___resize___height',
  backgroundExperience___resize___aspectRatio = 'backgroundExperience___resize___aspectRatio',
  backgroundExperience___parent___id = 'backgroundExperience___parent___id',
  backgroundExperience___parent___parent___id = 'backgroundExperience___parent___parent___id',
  backgroundExperience___parent___parent___children = 'backgroundExperience___parent___parent___children',
  backgroundExperience___parent___children = 'backgroundExperience___parent___children',
  backgroundExperience___parent___children___id = 'backgroundExperience___parent___children___id',
  backgroundExperience___parent___children___children = 'backgroundExperience___parent___children___children',
  backgroundExperience___parent___internal___content = 'backgroundExperience___parent___internal___content',
  backgroundExperience___parent___internal___contentDigest = 'backgroundExperience___parent___internal___contentDigest',
  backgroundExperience___parent___internal___description = 'backgroundExperience___parent___internal___description',
  backgroundExperience___parent___internal___fieldOwners = 'backgroundExperience___parent___internal___fieldOwners',
  backgroundExperience___parent___internal___ignoreType = 'backgroundExperience___parent___internal___ignoreType',
  backgroundExperience___parent___internal___mediaType = 'backgroundExperience___parent___internal___mediaType',
  backgroundExperience___parent___internal___owner = 'backgroundExperience___parent___internal___owner',
  backgroundExperience___parent___internal___type = 'backgroundExperience___parent___internal___type',
  backgroundExperience___children = 'backgroundExperience___children',
  backgroundExperience___children___id = 'backgroundExperience___children___id',
  backgroundExperience___children___parent___id = 'backgroundExperience___children___parent___id',
  backgroundExperience___children___parent___children = 'backgroundExperience___children___parent___children',
  backgroundExperience___children___children = 'backgroundExperience___children___children',
  backgroundExperience___children___children___id = 'backgroundExperience___children___children___id',
  backgroundExperience___children___children___children = 'backgroundExperience___children___children___children',
  backgroundExperience___children___internal___content = 'backgroundExperience___children___internal___content',
  backgroundExperience___children___internal___contentDigest = 'backgroundExperience___children___internal___contentDigest',
  backgroundExperience___children___internal___description = 'backgroundExperience___children___internal___description',
  backgroundExperience___children___internal___fieldOwners = 'backgroundExperience___children___internal___fieldOwners',
  backgroundExperience___children___internal___ignoreType = 'backgroundExperience___children___internal___ignoreType',
  backgroundExperience___children___internal___mediaType = 'backgroundExperience___children___internal___mediaType',
  backgroundExperience___children___internal___owner = 'backgroundExperience___children___internal___owner',
  backgroundExperience___children___internal___type = 'backgroundExperience___children___internal___type',
  backgroundExperience___internal___content = 'backgroundExperience___internal___content',
  backgroundExperience___internal___contentDigest = 'backgroundExperience___internal___contentDigest',
  backgroundExperience___internal___description = 'backgroundExperience___internal___description',
  backgroundExperience___internal___fieldOwners = 'backgroundExperience___internal___fieldOwners',
  backgroundExperience___internal___ignoreType = 'backgroundExperience___internal___ignoreType',
  backgroundExperience___internal___mediaType = 'backgroundExperience___internal___mediaType',
  backgroundExperience___internal___owner = 'backgroundExperience___internal___owner',
  backgroundExperience___internal___type = 'backgroundExperience___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulSiteConfigurationFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  backgroundHome?: Maybe<ContentfulAssetFilterInput>
  backgroundExperience?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSiteConfigurationSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulSiteConfigurationGroupConnection = {
  __typename?: 'ContentfulSiteConfigurationGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSiteConfigurationEdge>
  nodes: Array<ContentfulSiteConfiguration>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulSiteConfigurationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSiteConfigurationFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulSiteConfigurationSys = {
  __typename?: 'ContentfulSiteConfigurationSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulSiteConfigurationSysContentType>
}

export type ContentfulSiteConfigurationSysContentType = {
  __typename?: 'ContentfulSiteConfigurationSysContentType'
  sys?: Maybe<ContentfulSiteConfigurationSysContentTypeSys>
}

export type ContentfulSiteConfigurationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSiteConfigurationSysContentTypeSysFilterInput>
}

export type ContentfulSiteConfigurationSysContentTypeSys = {
  __typename?: 'ContentfulSiteConfigurationSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulSiteConfigurationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSiteConfigurationSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulSiteConfigurationSysContentTypeFilterInput>
}

export type ContentfulSkillsCard = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulSkillsCard'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    icon?: Maybe<Scalars['String']>
    title?: Maybe<ContentfulSkillsCardTitle>
    slug?: Maybe<Scalars['String']>
    data?: Maybe<Array<Maybe<ContentfulSkillsCardDataJsonNode>>>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulSkillsCardSys>
    /** Returns all children nodes filtered by type contentfulSkillsCardDataJsonNode */
    childrenContentfulSkillsCardDataJsonNode?: Maybe<
      Array<Maybe<ContentfulSkillsCardDataJsonNode>>
    >
    /** Returns the first child node of type contentfulSkillsCardDataJsonNode or null if there are no children of given type on this node */
    childContentfulSkillsCardDataJsonNode?: Maybe<
      ContentfulSkillsCardDataJsonNode
    >
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulSkillsCardCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardConnection = {
  __typename?: 'ContentfulSkillsCardConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsCardEdge>
  nodes: Array<ContentfulSkillsCard>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulSkillsCardGroupConnection>
}

export type ContentfulSkillsCardConnectionDistinctArgs = {
  field: ContentfulSkillsCardFieldsEnum
}

export type ContentfulSkillsCardConnectionMaxArgs = {
  field: ContentfulSkillsCardFieldsEnum
}

export type ContentfulSkillsCardConnectionMinArgs = {
  field: ContentfulSkillsCardFieldsEnum
}

export type ContentfulSkillsCardConnectionSumArgs = {
  field: ContentfulSkillsCardFieldsEnum
}

export type ContentfulSkillsCardConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulSkillsCardFieldsEnum
}

export type ContentfulSkillsCardEdge = {
  __typename?: 'ContentfulSkillsCardEdge'
  next?: Maybe<ContentfulSkillsCard>
  node: ContentfulSkillsCard
  previous?: Maybe<ContentfulSkillsCard>
}

export enum ContentfulSkillsCardFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  icon = 'icon',
  title___raw = 'title___raw',
  slug = 'slug',
  data = 'data',
  data___id = 'data___id',
  data___parent___id = 'data___parent___id',
  data___parent___parent___id = 'data___parent___parent___id',
  data___parent___parent___children = 'data___parent___parent___children',
  data___parent___children = 'data___parent___children',
  data___parent___children___id = 'data___parent___children___id',
  data___parent___children___children = 'data___parent___children___children',
  data___parent___internal___content = 'data___parent___internal___content',
  data___parent___internal___contentDigest = 'data___parent___internal___contentDigest',
  data___parent___internal___description = 'data___parent___internal___description',
  data___parent___internal___fieldOwners = 'data___parent___internal___fieldOwners',
  data___parent___internal___ignoreType = 'data___parent___internal___ignoreType',
  data___parent___internal___mediaType = 'data___parent___internal___mediaType',
  data___parent___internal___owner = 'data___parent___internal___owner',
  data___parent___internal___type = 'data___parent___internal___type',
  data___children = 'data___children',
  data___children___id = 'data___children___id',
  data___children___parent___id = 'data___children___parent___id',
  data___children___parent___children = 'data___children___parent___children',
  data___children___children = 'data___children___children',
  data___children___children___id = 'data___children___children___id',
  data___children___children___children = 'data___children___children___children',
  data___children___internal___content = 'data___children___internal___content',
  data___children___internal___contentDigest = 'data___children___internal___contentDigest',
  data___children___internal___description = 'data___children___internal___description',
  data___children___internal___fieldOwners = 'data___children___internal___fieldOwners',
  data___children___internal___ignoreType = 'data___children___internal___ignoreType',
  data___children___internal___mediaType = 'data___children___internal___mediaType',
  data___children___internal___owner = 'data___children___internal___owner',
  data___children___internal___type = 'data___children___internal___type',
  data___internal___content = 'data___internal___content',
  data___internal___contentDigest = 'data___internal___contentDigest',
  data___internal___description = 'data___internal___description',
  data___internal___fieldOwners = 'data___internal___fieldOwners',
  data___internal___ignoreType = 'data___internal___ignoreType',
  data___internal___mediaType = 'data___internal___mediaType',
  data___internal___owner = 'data___internal___owner',
  data___internal___type = 'data___internal___type',
  data___icon = 'data___icon',
  data___name = 'data___name',
  data___score = 'data___score',
  data___sys___type = 'data___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  childrenContentfulSkillsCardDataJsonNode = 'childrenContentfulSkillsCardDataJsonNode',
  childrenContentfulSkillsCardDataJsonNode___id = 'childrenContentfulSkillsCardDataJsonNode___id',
  childrenContentfulSkillsCardDataJsonNode___parent___id = 'childrenContentfulSkillsCardDataJsonNode___parent___id',
  childrenContentfulSkillsCardDataJsonNode___parent___parent___id = 'childrenContentfulSkillsCardDataJsonNode___parent___parent___id',
  childrenContentfulSkillsCardDataJsonNode___parent___parent___children = 'childrenContentfulSkillsCardDataJsonNode___parent___parent___children',
  childrenContentfulSkillsCardDataJsonNode___parent___children = 'childrenContentfulSkillsCardDataJsonNode___parent___children',
  childrenContentfulSkillsCardDataJsonNode___parent___children___id = 'childrenContentfulSkillsCardDataJsonNode___parent___children___id',
  childrenContentfulSkillsCardDataJsonNode___parent___children___children = 'childrenContentfulSkillsCardDataJsonNode___parent___children___children',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___content = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___content',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___contentDigest = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___contentDigest',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___description = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___description',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___fieldOwners = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___fieldOwners',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___ignoreType = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___ignoreType',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___mediaType = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___mediaType',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___owner = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___owner',
  childrenContentfulSkillsCardDataJsonNode___parent___internal___type = 'childrenContentfulSkillsCardDataJsonNode___parent___internal___type',
  childrenContentfulSkillsCardDataJsonNode___children = 'childrenContentfulSkillsCardDataJsonNode___children',
  childrenContentfulSkillsCardDataJsonNode___children___id = 'childrenContentfulSkillsCardDataJsonNode___children___id',
  childrenContentfulSkillsCardDataJsonNode___children___parent___id = 'childrenContentfulSkillsCardDataJsonNode___children___parent___id',
  childrenContentfulSkillsCardDataJsonNode___children___parent___children = 'childrenContentfulSkillsCardDataJsonNode___children___parent___children',
  childrenContentfulSkillsCardDataJsonNode___children___children = 'childrenContentfulSkillsCardDataJsonNode___children___children',
  childrenContentfulSkillsCardDataJsonNode___children___children___id = 'childrenContentfulSkillsCardDataJsonNode___children___children___id',
  childrenContentfulSkillsCardDataJsonNode___children___children___children = 'childrenContentfulSkillsCardDataJsonNode___children___children___children',
  childrenContentfulSkillsCardDataJsonNode___children___internal___content = 'childrenContentfulSkillsCardDataJsonNode___children___internal___content',
  childrenContentfulSkillsCardDataJsonNode___children___internal___contentDigest = 'childrenContentfulSkillsCardDataJsonNode___children___internal___contentDigest',
  childrenContentfulSkillsCardDataJsonNode___children___internal___description = 'childrenContentfulSkillsCardDataJsonNode___children___internal___description',
  childrenContentfulSkillsCardDataJsonNode___children___internal___fieldOwners = 'childrenContentfulSkillsCardDataJsonNode___children___internal___fieldOwners',
  childrenContentfulSkillsCardDataJsonNode___children___internal___ignoreType = 'childrenContentfulSkillsCardDataJsonNode___children___internal___ignoreType',
  childrenContentfulSkillsCardDataJsonNode___children___internal___mediaType = 'childrenContentfulSkillsCardDataJsonNode___children___internal___mediaType',
  childrenContentfulSkillsCardDataJsonNode___children___internal___owner = 'childrenContentfulSkillsCardDataJsonNode___children___internal___owner',
  childrenContentfulSkillsCardDataJsonNode___children___internal___type = 'childrenContentfulSkillsCardDataJsonNode___children___internal___type',
  childrenContentfulSkillsCardDataJsonNode___internal___content = 'childrenContentfulSkillsCardDataJsonNode___internal___content',
  childrenContentfulSkillsCardDataJsonNode___internal___contentDigest = 'childrenContentfulSkillsCardDataJsonNode___internal___contentDigest',
  childrenContentfulSkillsCardDataJsonNode___internal___description = 'childrenContentfulSkillsCardDataJsonNode___internal___description',
  childrenContentfulSkillsCardDataJsonNode___internal___fieldOwners = 'childrenContentfulSkillsCardDataJsonNode___internal___fieldOwners',
  childrenContentfulSkillsCardDataJsonNode___internal___ignoreType = 'childrenContentfulSkillsCardDataJsonNode___internal___ignoreType',
  childrenContentfulSkillsCardDataJsonNode___internal___mediaType = 'childrenContentfulSkillsCardDataJsonNode___internal___mediaType',
  childrenContentfulSkillsCardDataJsonNode___internal___owner = 'childrenContentfulSkillsCardDataJsonNode___internal___owner',
  childrenContentfulSkillsCardDataJsonNode___internal___type = 'childrenContentfulSkillsCardDataJsonNode___internal___type',
  childrenContentfulSkillsCardDataJsonNode___icon = 'childrenContentfulSkillsCardDataJsonNode___icon',
  childrenContentfulSkillsCardDataJsonNode___name = 'childrenContentfulSkillsCardDataJsonNode___name',
  childrenContentfulSkillsCardDataJsonNode___score = 'childrenContentfulSkillsCardDataJsonNode___score',
  childrenContentfulSkillsCardDataJsonNode___sys___type = 'childrenContentfulSkillsCardDataJsonNode___sys___type',
  childContentfulSkillsCardDataJsonNode___id = 'childContentfulSkillsCardDataJsonNode___id',
  childContentfulSkillsCardDataJsonNode___parent___id = 'childContentfulSkillsCardDataJsonNode___parent___id',
  childContentfulSkillsCardDataJsonNode___parent___parent___id = 'childContentfulSkillsCardDataJsonNode___parent___parent___id',
  childContentfulSkillsCardDataJsonNode___parent___parent___children = 'childContentfulSkillsCardDataJsonNode___parent___parent___children',
  childContentfulSkillsCardDataJsonNode___parent___children = 'childContentfulSkillsCardDataJsonNode___parent___children',
  childContentfulSkillsCardDataJsonNode___parent___children___id = 'childContentfulSkillsCardDataJsonNode___parent___children___id',
  childContentfulSkillsCardDataJsonNode___parent___children___children = 'childContentfulSkillsCardDataJsonNode___parent___children___children',
  childContentfulSkillsCardDataJsonNode___parent___internal___content = 'childContentfulSkillsCardDataJsonNode___parent___internal___content',
  childContentfulSkillsCardDataJsonNode___parent___internal___contentDigest = 'childContentfulSkillsCardDataJsonNode___parent___internal___contentDigest',
  childContentfulSkillsCardDataJsonNode___parent___internal___description = 'childContentfulSkillsCardDataJsonNode___parent___internal___description',
  childContentfulSkillsCardDataJsonNode___parent___internal___fieldOwners = 'childContentfulSkillsCardDataJsonNode___parent___internal___fieldOwners',
  childContentfulSkillsCardDataJsonNode___parent___internal___ignoreType = 'childContentfulSkillsCardDataJsonNode___parent___internal___ignoreType',
  childContentfulSkillsCardDataJsonNode___parent___internal___mediaType = 'childContentfulSkillsCardDataJsonNode___parent___internal___mediaType',
  childContentfulSkillsCardDataJsonNode___parent___internal___owner = 'childContentfulSkillsCardDataJsonNode___parent___internal___owner',
  childContentfulSkillsCardDataJsonNode___parent___internal___type = 'childContentfulSkillsCardDataJsonNode___parent___internal___type',
  childContentfulSkillsCardDataJsonNode___children = 'childContentfulSkillsCardDataJsonNode___children',
  childContentfulSkillsCardDataJsonNode___children___id = 'childContentfulSkillsCardDataJsonNode___children___id',
  childContentfulSkillsCardDataJsonNode___children___parent___id = 'childContentfulSkillsCardDataJsonNode___children___parent___id',
  childContentfulSkillsCardDataJsonNode___children___parent___children = 'childContentfulSkillsCardDataJsonNode___children___parent___children',
  childContentfulSkillsCardDataJsonNode___children___children = 'childContentfulSkillsCardDataJsonNode___children___children',
  childContentfulSkillsCardDataJsonNode___children___children___id = 'childContentfulSkillsCardDataJsonNode___children___children___id',
  childContentfulSkillsCardDataJsonNode___children___children___children = 'childContentfulSkillsCardDataJsonNode___children___children___children',
  childContentfulSkillsCardDataJsonNode___children___internal___content = 'childContentfulSkillsCardDataJsonNode___children___internal___content',
  childContentfulSkillsCardDataJsonNode___children___internal___contentDigest = 'childContentfulSkillsCardDataJsonNode___children___internal___contentDigest',
  childContentfulSkillsCardDataJsonNode___children___internal___description = 'childContentfulSkillsCardDataJsonNode___children___internal___description',
  childContentfulSkillsCardDataJsonNode___children___internal___fieldOwners = 'childContentfulSkillsCardDataJsonNode___children___internal___fieldOwners',
  childContentfulSkillsCardDataJsonNode___children___internal___ignoreType = 'childContentfulSkillsCardDataJsonNode___children___internal___ignoreType',
  childContentfulSkillsCardDataJsonNode___children___internal___mediaType = 'childContentfulSkillsCardDataJsonNode___children___internal___mediaType',
  childContentfulSkillsCardDataJsonNode___children___internal___owner = 'childContentfulSkillsCardDataJsonNode___children___internal___owner',
  childContentfulSkillsCardDataJsonNode___children___internal___type = 'childContentfulSkillsCardDataJsonNode___children___internal___type',
  childContentfulSkillsCardDataJsonNode___internal___content = 'childContentfulSkillsCardDataJsonNode___internal___content',
  childContentfulSkillsCardDataJsonNode___internal___contentDigest = 'childContentfulSkillsCardDataJsonNode___internal___contentDigest',
  childContentfulSkillsCardDataJsonNode___internal___description = 'childContentfulSkillsCardDataJsonNode___internal___description',
  childContentfulSkillsCardDataJsonNode___internal___fieldOwners = 'childContentfulSkillsCardDataJsonNode___internal___fieldOwners',
  childContentfulSkillsCardDataJsonNode___internal___ignoreType = 'childContentfulSkillsCardDataJsonNode___internal___ignoreType',
  childContentfulSkillsCardDataJsonNode___internal___mediaType = 'childContentfulSkillsCardDataJsonNode___internal___mediaType',
  childContentfulSkillsCardDataJsonNode___internal___owner = 'childContentfulSkillsCardDataJsonNode___internal___owner',
  childContentfulSkillsCardDataJsonNode___internal___type = 'childContentfulSkillsCardDataJsonNode___internal___type',
  childContentfulSkillsCardDataJsonNode___icon = 'childContentfulSkillsCardDataJsonNode___icon',
  childContentfulSkillsCardDataJsonNode___name = 'childContentfulSkillsCardDataJsonNode___name',
  childContentfulSkillsCardDataJsonNode___score = 'childContentfulSkillsCardDataJsonNode___score',
  childContentfulSkillsCardDataJsonNode___sys___type = 'childContentfulSkillsCardDataJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulSkillsCardFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  title?: Maybe<ContentfulSkillsCardTitleFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  data?: Maybe<ContentfulSkillsCardDataJsonNodeFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsCardSysFilterInput>
  childrenContentfulSkillsCardDataJsonNode?: Maybe<
    ContentfulSkillsCardDataJsonNodeFilterListInput
  >
  childContentfulSkillsCardDataJsonNode?: Maybe<
    ContentfulSkillsCardDataJsonNodeFilterInput
  >
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulSkillsCardGroupConnection = {
  __typename?: 'ContentfulSkillsCardGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsCardEdge>
  nodes: Array<ContentfulSkillsCard>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillsCardFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulSkillsCardSys = {
  __typename?: 'ContentfulSkillsCardSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulSkillsCardSysContentType>
}

export type ContentfulSkillsCardSysContentType = {
  __typename?: 'ContentfulSkillsCardSysContentType'
  sys?: Maybe<ContentfulSkillsCardSysContentTypeSys>
}

export type ContentfulSkillsCardSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillsCardSysContentTypeSysFilterInput>
}

export type ContentfulSkillsCardSysContentTypeSys = {
  __typename?: 'ContentfulSkillsCardSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSkillsCardSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulSkillsCardSysContentTypeFilterInput>
}

export type ContentfulSkillsCardTitle = {
  __typename?: 'ContentfulSkillsCardTitle'
  raw?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardTitleFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTestimonial = ContentfulReference &
  ContentfulEntry &
  Node & {
    __typename?: 'ContentfulTestimonial'
    contentful_id: Scalars['String']
    id: Scalars['ID']
    node_locale: Scalars['String']
    firstName?: Maybe<Scalars['String']>
    lastName?: Maybe<Scalars['String']>
    testimony?: Maybe<ContentfulTestimonialTestimony>
    date?: Maybe<Scalars['Date']>
    companyName?: Maybe<Scalars['String']>
    jobTitle?: Maybe<Scalars['String']>
    spaceId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['Date']>
    updatedAt?: Maybe<Scalars['Date']>
    sys?: Maybe<ContentfulTestimonialSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulTestimonialDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialConnection = {
  __typename?: 'ContentfulTestimonialConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulTestimonialEdge>
  nodes: Array<ContentfulTestimonial>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulTestimonialGroupConnection>
}

export type ContentfulTestimonialConnectionDistinctArgs = {
  field: ContentfulTestimonialFieldsEnum
}

export type ContentfulTestimonialConnectionMaxArgs = {
  field: ContentfulTestimonialFieldsEnum
}

export type ContentfulTestimonialConnectionMinArgs = {
  field: ContentfulTestimonialFieldsEnum
}

export type ContentfulTestimonialConnectionSumArgs = {
  field: ContentfulTestimonialFieldsEnum
}

export type ContentfulTestimonialConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulTestimonialFieldsEnum
}

export type ContentfulTestimonialEdge = {
  __typename?: 'ContentfulTestimonialEdge'
  next?: Maybe<ContentfulTestimonial>
  node: ContentfulTestimonial
  previous?: Maybe<ContentfulTestimonial>
}

export enum ContentfulTestimonialFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  firstName = 'firstName',
  lastName = 'lastName',
  testimony___raw = 'testimony___raw',
  date = 'date',
  companyName = 'companyName',
  jobTitle = 'jobTitle',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulTestimonialFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  firstName?: Maybe<StringQueryOperatorInput>
  lastName?: Maybe<StringQueryOperatorInput>
  testimony?: Maybe<ContentfulTestimonialTestimonyFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulTestimonialGroupConnection = {
  __typename?: 'ContentfulTestimonialGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulTestimonialEdge>
  nodes: Array<ContentfulTestimonial>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTestimonialFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTestimonialSys = {
  __typename?: 'ContentfulTestimonialSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulTestimonialSysContentType>
}

export type ContentfulTestimonialSysContentType = {
  __typename?: 'ContentfulTestimonialSysContentType'
  sys?: Maybe<ContentfulTestimonialSysContentTypeSys>
}

export type ContentfulTestimonialSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTestimonialSysContentTypeSysFilterInput>
}

export type ContentfulTestimonialSysContentTypeSys = {
  __typename?: 'ContentfulTestimonialSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTestimonialSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulTestimonialSysContentTypeFilterInput>
}

export type ContentfulTestimonialTestimony = {
  __typename?: 'ContentfulTestimonialTestimony'
  raw?: Maybe<Scalars['String']>
}

export type ContentfulTestimonialTestimonyFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageResizingBehavior {
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  FILL = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query'
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  contentfulEntry?: Maybe<ContentfulEntry>
  allContentfulEntry: ContentfulEntryConnection
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset: ContentfulAssetConnection
  contentfulExperience?: Maybe<ContentfulExperience>
  allContentfulExperience: ContentfulExperienceConnection
  contentfulTestimonial?: Maybe<ContentfulTestimonial>
  allContentfulTestimonial: ContentfulTestimonialConnection
  contentfulContact?: Maybe<ContentfulContact>
  allContentfulContact: ContentfulContactConnection
  contentfulMediaLink?: Maybe<ContentfulMediaLink>
  allContentfulMediaLink: ContentfulMediaLinkConnection
  contentfulSiteConfiguration?: Maybe<ContentfulSiteConfiguration>
  allContentfulSiteConfiguration: ContentfulSiteConfigurationConnection
  contentfulSkillsCard?: Maybe<ContentfulSkillsCard>
  allContentfulSkillsCard: ContentfulSkillsCardConnection
  contentfulSkillsCardDataJsonNode?: Maybe<ContentfulSkillsCardDataJsonNode>
  allContentfulSkillsCardDataJsonNode: ContentfulSkillsCardDataJsonNodeConnection
  contentfulExperienceIconsJsonNode?: Maybe<ContentfulExperienceIconsJsonNode>
  allContentfulExperienceIconsJsonNode: ContentfulExperienceIconsJsonNodeConnection
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType: ContentfulContentTypeConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>
  sort?: Maybe<ContentfulEntrySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  localFile?: Maybe<FileFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulExperienceArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  companyLink?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  description?: Maybe<ContentfulExperienceDescriptionFilterInput>
  dateStart?: Maybe<DateQueryOperatorInput>
  dateEnd?: Maybe<DateQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  companyLogo?: Maybe<ContentfulAssetFilterInput>
  icons?: Maybe<ContentfulExperienceIconsJsonNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulExperienceSysFilterInput>
  childrenContentfulExperienceIconsJsonNode?: Maybe<
    ContentfulExperienceIconsJsonNodeFilterListInput
  >
  childContentfulExperienceIconsJsonNode?: Maybe<
    ContentfulExperienceIconsJsonNodeFilterInput
  >
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulExperienceArgs = {
  filter?: Maybe<ContentfulExperienceFilterInput>
  sort?: Maybe<ContentfulExperienceSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulTestimonialArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  firstName?: Maybe<StringQueryOperatorInput>
  lastName?: Maybe<StringQueryOperatorInput>
  testimony?: Maybe<ContentfulTestimonialTestimonyFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulTestimonialArgs = {
  filter?: Maybe<ContentfulTestimonialFilterInput>
  sort?: Maybe<ContentfulTestimonialSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContactArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  heading?: Maybe<StringQueryOperatorInput>
  value?: Maybe<ContentfulContactValueFilterInput>
  icon?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulContactArgs = {
  filter?: Maybe<ContentfulContactFilterInput>
  sort?: Maybe<ContentfulContactSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulMediaLinkArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  link?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulMediaLinkSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulMediaLinkArgs = {
  filter?: Maybe<ContentfulMediaLinkFilterInput>
  sort?: Maybe<ContentfulMediaLinkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulSiteConfigurationArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  backgroundHome?: Maybe<ContentfulAssetFilterInput>
  backgroundExperience?: Maybe<ContentfulAssetFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSiteConfigurationSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulSiteConfigurationArgs = {
  filter?: Maybe<ContentfulSiteConfigurationFilterInput>
  sort?: Maybe<ContentfulSiteConfigurationSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulSkillsCardArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  title?: Maybe<ContentfulSkillsCardTitleFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  data?: Maybe<ContentfulSkillsCardDataJsonNodeFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsCardSysFilterInput>
  childrenContentfulSkillsCardDataJsonNode?: Maybe<
    ContentfulSkillsCardDataJsonNodeFilterListInput
  >
  childContentfulSkillsCardDataJsonNode?: Maybe<
    ContentfulSkillsCardDataJsonNodeFilterInput
  >
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulSkillsCardArgs = {
  filter?: Maybe<ContentfulSkillsCardFilterInput>
  sort?: Maybe<ContentfulSkillsCardSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulSkillsCardDataJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  icon?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  score?: Maybe<IntQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsCardDataJsonNodeSysFilterInput>
}

export type QueryAllContentfulSkillsCardDataJsonNodeArgs = {
  filter?: Maybe<ContentfulSkillsCardDataJsonNodeFilterInput>
  sort?: Maybe<ContentfulSkillsCardDataJsonNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulExperienceIconsJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  data?: Maybe<ContentfulExperienceIconsJsonNodeDataFilterListInput>
  sys?: Maybe<ContentfulExperienceIconsJsonNodeSysFilterInput>
}

export type QueryAllContentfulExperienceIconsJsonNodeArgs = {
  filter?: Maybe<ContentfulExperienceIconsJsonNodeFilterInput>
  sort?: Maybe<ContentfulExperienceIconsJsonNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___languages___langs = 'siteMetadata___languages___langs',
  siteMetadata___languages___defaultLangKey = 'siteMetadata___languages___defaultLangKey',
  port = 'port',
  host = 'host',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunction = Node & {
  __typename?: 'SiteFunction'
  functionRoute: Scalars['String']
  pluginName: Scalars['String']
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
  absoluteCompiledFilePath: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge'
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  functionRoute = 'functionRoute',
  pluginName = 'pluginName',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  locale?: Maybe<Scalars['String']>
  isDefault?: Maybe<Scalars['Boolean']>
}

export type SitePageContextFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>
  isDefault?: Maybe<BooleanQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___locale = 'context___locale',
  context___isDefault = 'context___isDefault',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___pathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  pluginCreator___pluginOptions___fonts___google = 'pluginCreator___pluginOptions___fonts___google',
  pluginCreator___pluginOptions___useMinify = 'pluginCreator___pluginOptions___useMinify',
  pluginCreator___pluginOptions___usePreload = 'pluginCreator___pluginOptions___usePreload',
  pluginCreator___pluginOptions___usePreconnect = 'pluginCreator___pluginOptions___usePreconnect',
  pluginCreator___pluginOptions___fileName = 'pluginCreator___pluginOptions___fileName',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___minify = 'pluginCreator___pluginOptions___minify',
  pluginCreator___pluginOptions___namespace = 'pluginCreator___pluginOptions___namespace',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator___pluginOptions___pure',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator___pluginOptions___spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  pluginCreator___pluginOptions___host = 'pluginCreator___pluginOptions___host',
  pluginCreator___pluginOptions___environment = 'pluginCreator___pluginOptions___environment',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator___pluginOptions___forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator___pluginOptions___pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator___pluginOptions___assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator___pluginOptions___useNameForId',
  pluginCreator___pluginOptions___color = 'pluginCreator___pluginOptions___color',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___entryLimit = 'pluginCreator___pluginOptions___entryLimit',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___description = 'pluginCreator___pluginOptions___description',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icons = 'pluginCreator___pluginOptions___icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator___pluginOptions___icons___src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator___pluginOptions___icons___sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator___pluginOptions___icons___type',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___fonts___google = 'pluginOptions___fonts___google',
  pluginOptions___fonts___google___family = 'pluginOptions___fonts___google___family',
  pluginOptions___fonts___google___variants = 'pluginOptions___fonts___google___variants',
  pluginOptions___fonts___google___subsets = 'pluginOptions___fonts___google___subsets',
  pluginOptions___useMinify = 'pluginOptions___useMinify',
  pluginOptions___usePreload = 'pluginOptions___usePreload',
  pluginOptions___usePreconnect = 'pluginOptions___usePreconnect',
  pluginOptions___fileName = 'pluginOptions___fileName',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___minify = 'pluginOptions___minify',
  pluginOptions___namespace = 'pluginOptions___namespace',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions___pure',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___downloadLocal = 'pluginOptions___downloadLocal',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___forceFullSync = 'pluginOptions___forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions___pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions___assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions___useNameForId',
  pluginOptions___color = 'pluginOptions___color',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___entryLimit = 'pluginOptions___entryLimit',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___description = 'pluginOptions___description',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icons = 'pluginOptions___icons',
  pluginOptions___icons___src = 'pluginOptions___icons___src',
  pluginOptions___icons___sizes = 'pluginOptions___icons___sizes',
  pluginOptions___icons___type = 'pluginOptions___icons___type',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions___crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  pathToConfigModule?: Maybe<Scalars['String']>
  fonts?: Maybe<SitePluginPluginOptionsFonts>
  useMinify?: Maybe<Scalars['Boolean']>
  usePreload?: Maybe<Scalars['Boolean']>
  usePreconnect?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['Boolean']>
  displayName?: Maybe<Scalars['Boolean']>
  minify?: Maybe<Scalars['Boolean']>
  namespace?: Maybe<Scalars['String']>
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>
  pure?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  spaceId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  downloadLocal?: Maybe<Scalars['Boolean']>
  host?: Maybe<Scalars['String']>
  environment?: Maybe<Scalars['String']>
  forceFullSync?: Maybe<Scalars['Boolean']>
  pageLimit?: Maybe<Scalars['Int']>
  assetDownloadWorkers?: Maybe<Scalars['Int']>
  useNameForId?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  output?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  entryLimit?: Maybe<Scalars['Int']>
  query?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cache_busting_mode?: Maybe<Scalars['String']>
  crossOrigin?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  pathCheck?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFilterInput = {
  pathToConfigModule?: Maybe<StringQueryOperatorInput>
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>
  useMinify?: Maybe<BooleanQueryOperatorInput>
  usePreload?: Maybe<BooleanQueryOperatorInput>
  usePreconnect?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  namespace?: Maybe<StringQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  downloadLocal?: Maybe<BooleanQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  environment?: Maybe<StringQueryOperatorInput>
  forceFullSync?: Maybe<BooleanQueryOperatorInput>
  pageLimit?: Maybe<IntQueryOperatorInput>
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>
  useNameForId?: Maybe<BooleanQueryOperatorInput>
  color?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  entryLimit?: Maybe<IntQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFonts = {
  __typename?: 'SitePluginPluginOptionsFonts'
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>
}

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>
}

export type SitePluginPluginOptionsFontsGoogle = {
  __typename?: 'SitePluginPluginOptionsFontsGoogle'
  family?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<Scalars['String']>>>
  subsets?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>
  variants?: Maybe<StringQueryOperatorInput>
  subsets?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>
}

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons'
  src?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  languages?: Maybe<SiteSiteMetadataLanguages>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  languages?: Maybe<SiteSiteMetadataLanguagesFilterInput>
}

export type SiteSiteMetadataLanguages = {
  __typename?: 'SiteSiteMetadataLanguages'
  langs?: Maybe<Array<Maybe<Scalars['String']>>>
  defaultLangKey?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataLanguagesFilterInput = {
  langs?: Maybe<StringQueryOperatorInput>
  defaultLangKey?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type ContentfulExperienceIconsJsonNode = Node & {
  __typename?: 'contentfulExperienceIconsJsonNode'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  data?: Maybe<Array<Maybe<ContentfulExperienceIconsJsonNodeData>>>
  sys?: Maybe<ContentfulExperienceIconsJsonNodeSys>
}

export type ContentfulExperienceIconsJsonNodeConnection = {
  __typename?: 'contentfulExperienceIconsJsonNodeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulExperienceIconsJsonNodeEdge>
  nodes: Array<ContentfulExperienceIconsJsonNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulExperienceIconsJsonNodeGroupConnection>
}

export type ContentfulExperienceIconsJsonNodeConnectionDistinctArgs = {
  field: ContentfulExperienceIconsJsonNodeFieldsEnum
}

export type ContentfulExperienceIconsJsonNodeConnectionMaxArgs = {
  field: ContentfulExperienceIconsJsonNodeFieldsEnum
}

export type ContentfulExperienceIconsJsonNodeConnectionMinArgs = {
  field: ContentfulExperienceIconsJsonNodeFieldsEnum
}

export type ContentfulExperienceIconsJsonNodeConnectionSumArgs = {
  field: ContentfulExperienceIconsJsonNodeFieldsEnum
}

export type ContentfulExperienceIconsJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulExperienceIconsJsonNodeFieldsEnum
}

export type ContentfulExperienceIconsJsonNodeData = {
  __typename?: 'contentfulExperienceIconsJsonNodeData'
  icon?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ContentfulExperienceIconsJsonNodeDataFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type ContentfulExperienceIconsJsonNodeDataFilterListInput = {
  elemMatch?: Maybe<ContentfulExperienceIconsJsonNodeDataFilterInput>
}

export type ContentfulExperienceIconsJsonNodeEdge = {
  __typename?: 'contentfulExperienceIconsJsonNodeEdge'
  next?: Maybe<ContentfulExperienceIconsJsonNode>
  node: ContentfulExperienceIconsJsonNode
  previous?: Maybe<ContentfulExperienceIconsJsonNode>
}

export enum ContentfulExperienceIconsJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  data = 'data',
  data___icon = 'data___icon',
  data___name = 'data___name',
  sys___type = 'sys___type'
}

export type ContentfulExperienceIconsJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  data?: Maybe<ContentfulExperienceIconsJsonNodeDataFilterListInput>
  sys?: Maybe<ContentfulExperienceIconsJsonNodeSysFilterInput>
}

export type ContentfulExperienceIconsJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulExperienceIconsJsonNodeFilterInput>
}

export type ContentfulExperienceIconsJsonNodeGroupConnection = {
  __typename?: 'contentfulExperienceIconsJsonNodeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulExperienceIconsJsonNodeEdge>
  nodes: Array<ContentfulExperienceIconsJsonNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulExperienceIconsJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulExperienceIconsJsonNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulExperienceIconsJsonNodeSys = {
  __typename?: 'contentfulExperienceIconsJsonNodeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulExperienceIconsJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSkillsCardDataJsonNode = Node & {
  __typename?: 'contentfulSkillsCardDataJsonNode'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  icon?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  score?: Maybe<Scalars['Int']>
  sys?: Maybe<ContentfulSkillsCardDataJsonNodeSys>
}

export type ContentfulSkillsCardDataJsonNodeConnection = {
  __typename?: 'contentfulSkillsCardDataJsonNodeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsCardDataJsonNodeEdge>
  nodes: Array<ContentfulSkillsCardDataJsonNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ContentfulSkillsCardDataJsonNodeGroupConnection>
}

export type ContentfulSkillsCardDataJsonNodeConnectionDistinctArgs = {
  field: ContentfulSkillsCardDataJsonNodeFieldsEnum
}

export type ContentfulSkillsCardDataJsonNodeConnectionMaxArgs = {
  field: ContentfulSkillsCardDataJsonNodeFieldsEnum
}

export type ContentfulSkillsCardDataJsonNodeConnectionMinArgs = {
  field: ContentfulSkillsCardDataJsonNodeFieldsEnum
}

export type ContentfulSkillsCardDataJsonNodeConnectionSumArgs = {
  field: ContentfulSkillsCardDataJsonNodeFieldsEnum
}

export type ContentfulSkillsCardDataJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulSkillsCardDataJsonNodeFieldsEnum
}

export type ContentfulSkillsCardDataJsonNodeEdge = {
  __typename?: 'contentfulSkillsCardDataJsonNodeEdge'
  next?: Maybe<ContentfulSkillsCardDataJsonNode>
  node: ContentfulSkillsCardDataJsonNode
  previous?: Maybe<ContentfulSkillsCardDataJsonNode>
}

export enum ContentfulSkillsCardDataJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  icon = 'icon',
  name = 'name',
  score = 'score',
  sys___type = 'sys___type'
}

export type ContentfulSkillsCardDataJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  icon?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  score?: Maybe<IntQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsCardDataJsonNodeSysFilterInput>
}

export type ContentfulSkillsCardDataJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillsCardDataJsonNodeFilterInput>
}

export type ContentfulSkillsCardDataJsonNodeGroupConnection = {
  __typename?: 'contentfulSkillsCardDataJsonNodeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsCardDataJsonNodeEdge>
  nodes: Array<ContentfulSkillsCardDataJsonNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardDataJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillsCardDataJsonNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulSkillsCardDataJsonNodeSys = {
  __typename?: 'contentfulSkillsCardDataJsonNodeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulSkillsCardDataJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type HomePageQueryVariables = Exact<{
  locale: Scalars['String']
}>

export type HomePageQuery = { __typename?: 'Query' } & {
  allContentfulSiteConfiguration: {
    __typename?: 'ContentfulSiteConfigurationConnection'
  } & {
    edges: Array<
      { __typename?: 'ContentfulSiteConfigurationEdge' } & {
        node: { __typename?: 'ContentfulSiteConfiguration' } & {
          backgroundHome?: Maybe<
            { __typename?: 'ContentfulAsset' } & {
              fluid?: Maybe<
                { __typename?: 'ContentfulFluid' } & Pick<
                  ContentfulFluid,
                  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
                >
              >
            }
          >
          backgroundExperience?: Maybe<
            { __typename?: 'ContentfulAsset' } & {
              fluid?: Maybe<
                { __typename?: 'ContentfulFluid' } & Pick<
                  ContentfulFluid,
                  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
                >
              >
            }
          >
        }
      }
    >
  }
  allContentfulSkillsCard: { __typename?: 'ContentfulSkillsCardConnection' } & {
    edges: Array<
      { __typename?: 'ContentfulSkillsCardEdge' } & {
        node: { __typename?: 'ContentfulSkillsCard' } & Pick<
          ContentfulSkillsCard,
          'id' | 'icon'
        > & {
            title?: Maybe<
              { __typename?: 'ContentfulSkillsCardTitle' } & Pick<
                ContentfulSkillsCardTitle,
                'raw'
              >
            >
            data?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'contentfulSkillsCardDataJsonNode' } & Pick<
                    ContentfulSkillsCardDataJsonNode,
                    'icon' | 'score' | 'name'
                  >
                >
              >
            >
          }
      }
    >
  }
  allContentfulExperience: { __typename?: 'ContentfulExperienceConnection' } & {
    edges: Array<
      { __typename?: 'ContentfulExperienceEdge' } & {
        node: { __typename?: 'ContentfulExperience' } & Pick<
          ContentfulExperience,
          | 'id'
          | 'title'
          | 'dateStart'
          | 'dateEnd'
          | 'type'
          | 'companyName'
          | 'companyLink'
        > & {
            icons?: Maybe<
              { __typename?: 'contentfulExperienceIconsJsonNode' } & {
                data?: Maybe<
                  Array<
                    Maybe<
                      {
                        __typename?: 'contentfulExperienceIconsJsonNodeData'
                      } & Pick<
                        ContentfulExperienceIconsJsonNodeData,
                        'name' | 'icon'
                      >
                    >
                  >
                >
              }
            >
            description?: Maybe<
              { __typename?: 'ContentfulExperienceDescription' } & Pick<
                ContentfulExperienceDescription,
                'raw'
              >
            >
            companyLogo?: Maybe<
              { __typename?: 'ContentfulAsset' } & Pick<
                ContentfulAsset,
                'title'
              > & {
                  fluid?: Maybe<
                    { __typename?: 'ContentfulFluid' } & Pick<
                      ContentfulFluid,
                      'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
                    >
                  >
                }
            >
          }
      }
    >
  }
  allContentfulTestimonial: {
    __typename?: 'ContentfulTestimonialConnection'
  } & {
    edges: Array<
      { __typename?: 'ContentfulTestimonialEdge' } & {
        node: { __typename?: 'ContentfulTestimonial' } & Pick<
          ContentfulTestimonial,
          'id' | 'firstName' | 'jobTitle' | 'lastName' | 'date' | 'companyName'
        > & {
            testimony?: Maybe<
              { __typename?: 'ContentfulTestimonialTestimony' } & Pick<
                ContentfulTestimonialTestimony,
                'raw'
              >
            >
          }
      }
    >
  }
  allContentfulContact: { __typename?: 'ContentfulContactConnection' } & {
    edges: Array<
      { __typename?: 'ContentfulContactEdge' } & {
        node: { __typename?: 'ContentfulContact' } & Pick<
          ContentfulContact,
          'id' | 'icon' | 'heading'
        > & {
            value?: Maybe<
              { __typename?: 'ContentfulContactValue' } & Pick<
                ContentfulContactValue,
                'raw'
              >
            >
          }
      }
    >
  }
  allContentfulMediaLink: { __typename?: 'ContentfulMediaLinkConnection' } & {
    edges: Array<
      { __typename?: 'ContentfulMediaLinkEdge' } & {
        node: { __typename?: 'ContentfulMediaLink' } & Pick<
          ContentfulMediaLink,
          'id' | 'icon' | 'link' | 'name'
        >
      }
    >
  }
}
