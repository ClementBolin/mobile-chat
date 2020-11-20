import config from '../../config.json';

const GOOGLE_URL = `https://vision.googleapis.com/v1/images:annotate?key=${config.API_KEY}`

export async function OCRDetection(img: string | undefined) {
    if (img == undefined) {
        return
    }
    const body = {
        requests: [
          {
            image: {
              content: img,
            },
            features: [
              {
                type: 'LABEL_DETECTION',
                maxResults: 1,
              },
            ],
          },
        ],
      };
    const requestOption: RequestInit = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    console.log("API KEY = " + GOOGLE_URL)
    const res = await fetch(GOOGLE_URL, requestOption)
    const resJ = await res.json()
    console.log("response JSON =f " + resJ)
}
