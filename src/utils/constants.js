export const LOGO = "https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/112095415?s=400&u=7437601668ac21e28d12c404c2139121bbbbc14d&v=4"

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"


  export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"},{identifier: "es", name: "Spanies"}]

export const GOOGLE_GEMINI_KEY 
= 
process.env.REACT_APP_GOOGLE_GEMINI_KEY;