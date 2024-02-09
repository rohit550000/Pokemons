import axios from 'axios'

export const FetchPokenmon = async (currentUrl) => {
    try {
        const { data } = await axios.get(currentUrl)
        return data
    } catch (err) {
        console.log(err)
    }
}

