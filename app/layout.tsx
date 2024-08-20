import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen">
				<Header />
				<main
					className="flex-grow bg-cover bg-center"
					style={{ backgroundImage: "url('/background.jpg')" }}
				>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
