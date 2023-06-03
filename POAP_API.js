const sdk = require('api')('@poap/v1.0#39wali2b8d84');

export async function createDelivery(slug, page_title, event_ids, ){
    await sdk.pOSTDeliveries({
        slug: 'string',
        card_title: 'Best Event',
        card_text: "You've attedned the best event",
        page_title: 'string',
        page_text: 'string',
        event_ids: 'event',
        secret_codes: 'string',
        image: 'string',
        page_title_image: 'string',
        metadata_title: 'string',
        metadata_description: 'string'
    })
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err));
}