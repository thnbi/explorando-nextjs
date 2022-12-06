import Link from "next/link";
import PageTitle from "../src/components/PageTitle";

export async function getServerSideProps() {
	const FAQ_API_URL =
		"https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
	const faq = await fetch(FAQ_API_URL)
		.then((resposta) => {
			return resposta.json();
		})
		.then((resposta) => {
			return resposta
		});

	return {
		props: {
         faq
      },
	};
}

export default function FAQPage({ faq }) {
	return (
		<div>
			<PageTitle>FAQ</PageTitle>
			<h1>FAQ</h1>
			<Link href="/"> Ir para a Home</Link>
			<ul>
				{faq.map(({ answer, question }) => (
					<article>
						<li key={question}>{question}</li>
						<p>{answer}</p>
					</article>
				))}
			</ul>
		</div>
	);
}
