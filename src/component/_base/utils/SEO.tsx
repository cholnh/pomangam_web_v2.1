import React from 'react';
import { Helmet } from "react-helmet"

interface Props {

  /**
   * 사이트 타이틀
   */
  siteName?: string,

  /**
   * 오픈 그래프 태그
   *
   * 카카오톡 링크 미리보기 등에 사용되는 태그
   */
  ogTitle?: string,

  /**
   * 선호 URL(혹은 대표 URL)
   *
   * 크롤러에게 전달 될 대표 URL 이며 색인에 대한 정보를 제공한다.
   * 크롤러는 블랙햇 SEO (FAKE 사이트로 검색순위 어뷰징)를 막기 위해
   * 다른 URL 상에 중복 컨텐츠가 있다면 페널티를 부과함.
   * 즉 중복되거나 유사한 컨텐츠가 여러 사이트에 혼재할 경우 (Cross-domain canonical)
   * 캐노니컬 태그를 지정해 오리지널 컨텐츠를 알려줘서 [SEO VALUE] 를 한 곳으로 통일해야 한다.
   *
   * 아래는 캐노니컬 태그 지정이 필요한 항목이다.
   * - m.xxx.com 등 모바일 전용 사이트도 다른 페이지로 인식함
   * - blt.ly 와 같은 단축 URL 또는 변환 URL 또한 다른 페이지로 인식함
   * - SNS, 블로그 등 파트너 채널을 통한 컨텐츠 배포시
   *
   * 주의사항은 다음과 같다.
   * 1) 모든 페이지에 동일한 캐노니컬을 지정한 경우
   *    모든 오리지널 페이지에는 각각의 고유한 캐노니컬 태그가 지정되어 있어야 한다.
   * 2) URL 변경 이후 기존 URL 로 캐노니컬을 지정한 경우
   *    최신 URL 로 캐노니컬 태그를 유지해야 한다.
   * 3) 채널별로 다른 캐노니컬을 지정한 경우
   * 4) 모바일 페이지 URL 을 캐노니컬로 지정한 경우
   */
  canonical: string,  // always required
}

class Seo extends React.Component<Props> {

  render() {

    /**
     * 태그 기본 값
     */
    const lang = "ko_KR";
    const url = "https://www.poman.kr";
    const author = "포만감컴퍼니";
    const siteName = this.props.siteName ?? "포만감";
    const description = "기업 전문 점심 배송 서비스 플랫폼 - 포만감";
    const keywords = "포만감, 포만, 만족, 감동, 배달, 배송, 정기배달, 정기배송, 기업배달, 기업배송, 대학교, 대학교배달, 도시락, 기업 도시락, 기업 도시락 배송, 기업 도시락 배달, 회사 도시락, 회사 도시락 배달";
    const canonical = this.props.canonical;
    const themeColor = "#FFFFFF";
    /**
     * og-태그 기본 값
     */
    const ogTitle = this.props.ogTitle ?? "포만감 - 기업 전문 점심 배송 서비스 플랫폼";
    const ogImage = "https://poman.kr:9530/api/v1.2/assets/images/_bases/logo.png";
    const ogImageWidth = "1200";
    const ogImageHeight = "630";
    const ogType = "website";

    return (
      <Helmet
        meta={[
          {name: "description", content: description},
          {name: "keywords", content: keywords},
          {name: "author", content: author},
          {name: "theme-color", content: themeColor},

          {itemProp: "image", content: ogImage},

          {property: "og:title", content: ogTitle},
          {property: "og:description", content: description},
          {property: "og:image", content: ogImage},
          {property: "og:image:width", content: ogImageWidth},
          {property: "og:image:height", content: ogImageHeight},
          {property: "og:type", content: ogType},
          {property: "og:site_name", content: ogType},
          {property: "og:url", content: url + canonical},
          {property: "og:locale", content: lang},

          {property: "fb:pages", content: siteName},

          {property: "twitter:card", content: "summary_large_image"},
          {property: "twitter:title", content: ogTitle},
          {property: "twitter:description", content: description},
          {property: "twitter:image", content: ogImage},

        ]}
        titleTemplate="%s"
      >
        <html lang={lang}/>
        <title>{siteName}</title>
        <link rel="image_src" href={ogImage} />
        <link rel="canonical" href={url + canonical} />
        <link rel="alternate" href={url + canonical} hrefLang={lang}/>
      </Helmet>
    );
  }
}

export default Seo;