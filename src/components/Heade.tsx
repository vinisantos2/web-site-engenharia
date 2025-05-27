import Head from "next/head";

type MetaProps = {
    title?: string;
    description?: string;
};

export default function MetaHead({ title, description }: MetaProps) {
    return (
        <Head>
            <title>{title ?? "Construtora Engenharia XYZ"}</title>
            <meta
                name="description"
                content={description ?? "Projetos e obras com excelência em engenharia civil."}
            />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta name="author" content="Construtora XYZ" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
