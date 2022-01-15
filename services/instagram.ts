import axios from "axios";

axios.get('https://www.instagram.com/ilooksmodaoficial/feed/?__a=1')
     .then((resp:any) => {
	     const instaJSON = resp.data;
	     console.log(instaJSON.graphql.user.edge_owner_to_timeline_media.count);
	     instaJSON.graphql.user.edge_owner_to_timeline_media.edges.forEach((item:any) => {
		     console.log(`https://www.instagram.com/p/${item.shortcodeshortcode}/`);
		     console.log(`https://www.instagram.com/p/${item.display_url}/`);
	     });
     });