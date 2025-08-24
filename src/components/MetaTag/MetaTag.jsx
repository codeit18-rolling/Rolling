import { Helmet } from "react-helmet-async";
const DEFAULT_SEO = {
  title: "Rolling",
  description:
    "누구나 손쉽게, 온라인 롤링 페이퍼를 로그인 없이 자유롭게 만들어 보세요",
  url: "https://rolling-eta.vercel.app/",
  imgSrc: "/src/assets/img/img_og_thumbnail.png",
};

const MetaTag = ({ title, description, url, imgSrc }) => {
  return (
    <Helmet>
      {/* 기본 SEO */}
      <title>{title || DEFAULT_SEO.title}</title>
      <meta name="author" content="코드잇 18기 파트2 4팀" />
      <meta
        name="description"
        content={description || DEFAULT_SEO.description}
      />
      <meta
        name="Keywords"
        content="코드잇, 코드잇 기초 프로젝트, 코드잇 롤링 프로젝트, 롤링 프로젝트, Rolling"
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title || DEFAULT_SEO.title} />
      <meta property="og:site_name" content="Rolling" />
      <meta
        property="og:description"
        content={description || DEFAULT_SEO.description}
      />
      <meta property="og:url" content={url || DEFAULT_SEO.url} />
      <meta property="og:image" content={imgSrc || DEFAULT_SEO.imgSrc} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={title || DEFAULT_SEO.title} />
      <meta
        name="twitter:description"
        content={description || DEFAULT_SEO.description}
      />
      <meta name="twitter:url" content={url || DEFAULT_SEO.url} />
      <meta name="twitter:image" content={imgSrc || DEFAULT_SEO.imgSrc} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default MetaTag;


