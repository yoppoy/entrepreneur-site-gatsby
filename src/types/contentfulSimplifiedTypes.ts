import {
  ContentfulAsset,
  ContentfulContact,
  ContentfulContactValue,
  ContentfulExperience,
  ContentfulExperienceDescription,
  ContentfulExperienceIconsJsonNodeData,
  ContentfulFluid,
  ContentfulMediaLink,
  ContentfulSkillsCard,
  ContentfulSkillsCardDataJsonNode,
  ContentfulSkillsCardTitle,
  ContentfulTestimonial,
  ContentfulTestimonialTestimony,
  Maybe
} from './codegenContentfulTypes'

export type HomePageSiteConfiguration = {
  __typename?: 'ContentfulSiteConfiguration'
} & {
  backgroundHome?: Maybe<
    { __typename?: 'ContentfulAsset' } & {
      fluid?: Maybe<
        { __typename?: 'ContentfulFluid' } & Pick<
          ContentfulFluid,
          | 'base64'
          | 'tracedSVG'
          | 'aspectRatio'
          | 'src'
          | 'srcSet'
          | 'srcWebp'
          | 'srcSetWebp'
          | 'sizes'
        >
      >
    }
  >
  backgroundExperience?: Maybe<
    { __typename?: 'ContentfulAsset' } & {
      fluid?: Maybe<
        { __typename?: 'ContentfulFluid' } & Pick<
          ContentfulFluid,
          | 'base64'
          | 'tracedSVG'
          | 'aspectRatio'
          | 'src'
          | 'srcSet'
          | 'srcWebp'
          | 'srcSetWebp'
          | 'sizes'
        >
      >
    }
  >
}

export type HomePageSkillsCard = { __typename?: 'ContentfulSkillsCard' } & Pick<
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

export type HomePageExperience = { __typename?: 'ContentfulExperience' } & Pick<
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
              } & Pick<ContentfulExperienceIconsJsonNodeData, 'name' | 'icon'>
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
      { __typename?: 'ContentfulAsset' } & Pick<ContentfulAsset, 'title'> & {
          fluid?: Maybe<
            { __typename?: 'ContentfulFluid' } & Pick<
              ContentfulFluid,
              | 'base64'
              | 'tracedSVG'
              | 'aspectRatio'
              | 'src'
              | 'srcSet'
              | 'srcWebp'
              | 'srcSetWebp'
              | 'sizes'
            >
          >
        }
    >
  }

export type HomePageTestimonial = Pick<
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

export type HomePageContact = { __typename?: 'ContentfulContact' } & Pick<
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

export type HomePageMediaLink = { __typename?: 'ContentfulMediaLink' } & Pick<
  ContentfulMediaLink,
  'id' | 'icon' | 'link' | 'name'
>
