import Header from "@/components/header";
import CardsContainer from "@/components/cardsContainer";
import {SearchParams} from "@/interface";

export default async function Home({searchParams}: { searchParams: Promise<SearchParams> }) {
    // const query = await searchParams?.query ?? "";
    const {query = ""} = await searchParams;

    return (
        <div>
            <Header searchParams={{query}}/>
            <section className="section_container">
                <h1 className="text-2xl font-bold text-white">
                    {query ? `Search results for "${query}"` : "All Startups"}
                </h1>
                <CardsContainer/>
            </section>
        </div>
    );
}
