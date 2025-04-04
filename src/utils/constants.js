export const MY_API_KEY = import.meta.env.VITE_MY_API_KEY;

export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg";
export const USER_LOGI_URL = "https://occ-0-2610-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
export const AVATAR_URL = "https://github.com/settings/profile"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY 
    }
  };

  export const CDN_POSTER_URL = "https://image.tmdb.org/t/p/w500/"

  const supportedLanguages =[
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"},
    {identifier: "french", name: "French"}
  ]

  export default supportedLanguages;


