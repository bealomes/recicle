import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                <script src="https://kit.fontawesome.com/73c21df2c0.js" crossorigin="anonymous"></script>                </Head>
                <Main />
                <NextScript/>
            </Html>
        )
    }
}

export default MyDocument