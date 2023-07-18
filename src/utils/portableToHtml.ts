import { portableTextToHtml } from "astro-sanity";


export const sanityPortableText = (source:{})=>{
    return portableTextToHtml(source)
}