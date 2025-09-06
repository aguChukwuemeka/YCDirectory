import {SearchParams} from "@/interface";
import SearchForm from "@/components/searchFrom";


export default async function Header({searchParams}: { searchParams: Promise<SearchParams> }) {
    const {query = ""} = await searchParams;

    return (
        <header className="pattern">
            <div className="banner">
                <span className="banner_span">eipsum dolor consectetur</span>
                <div className="banner_text">
                    <h1>pitch your startup,</h1>
                    <h1>connect to entrepreneurs in tech</h1>
                </div>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    esse, saepe!
                </p>
                <SearchForm initialQuery={query}/>
            </div>
        </header>
    );
}
