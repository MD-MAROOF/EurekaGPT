import "dotenv/config";

const getOpenAPIResponse = async(message) => {
        const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        console.log(data.choices[0].message.content);
        return data.choices[0].message.content;  //this is the response that is being sent
    }
    catch (err) {
        console.log(err);
    }
}

export default getOpenAPIResponse;