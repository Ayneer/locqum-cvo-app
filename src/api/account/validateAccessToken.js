export const validateAccessToken = async accessToken => {

    const { REACT_APP_URL_SERVER } = process.env;
    const option = "auth";
    const action = "user";

    let resModel = {
        errors: [],
        message: "ok",
        status: "",
        data: null
    };
    
    try {

        const res = await fetch(REACT_APP_URL_SERVER, {
            method: 'POST',
            body: JSON.stringify({
                option,
                body: {
                    action,
                    access_token: accessToken,
                }
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        });

        resModel = await res.json();

    } catch (error) {
        console.log(error)
        resModel.status = "error";
        resModel.message = error.message;
        resModel.errors = error;
    }

    return resModel;
}