import config from '../../config.json';

const GOOGLE_URL = "https://vision.googleapis.com/v1/images:annotate?key="

export async function OCRDetection(img: string | undefined) {
    if (img == undefined) {
        return
    }
    const requestOption: RequestInit = {
        method: "POST",
        body: JSON.stringify({
            "requests": [{
                "image": { "content": img },
                "features": [
                    { "type": "TEXT_DETECTION" }
                ]}]
        })
    }
    const FULL_URL = GOOGLE_URL + config.API_KEY
    console.log("API KEY = " + FULL_URL)
    const res = await fetch(FULL_URL, requestOption)
    console.log("check res")
    console.log(res)
}
