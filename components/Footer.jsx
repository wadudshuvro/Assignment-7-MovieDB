export default function Footer() {
	const date = new Date();

	return (
		<footer className="py-6 md:py-8 mt-8">
			<div className="container mx-auto">
				<p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
					Copyright ©{date.getFullYear()} | All rights reserved by
					Learn with Sumit
				</p>
			</div>
		</footer>
	);
}
