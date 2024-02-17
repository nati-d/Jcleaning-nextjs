
import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: 'J Cleaning LLC - Professional Corporate Cleaning Services',
  siteName: 'J Cleaning LLC',
  description: 'Providing top-notch corporate cleaning services for a pristine work environment.',
  url: 'https://www.jcleaningllc.com',
  type: 'website',
  robots: 'follow, index',
  image: 'https://www.jcleaningllc.com/assets/cover-image.jpg',
  author: 'J Cleaning LLC'
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@YourTwitterHandle' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
    </Head>
  );
};

export default SeoHead;
