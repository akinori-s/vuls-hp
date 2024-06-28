import './App.css'

import Collapsible from './components/collapsible';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
		<>
			<header className='sticky top-0 bg-base-100/80 backdrop-blur shadow z-40'>
				<div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3 md:pt-5">
					<a href="/#" className='flex gap-2 items-center hover:bg-base-200 rounded'>
						<img src="vuls.svg" alt="ロゴ" className="h-9 md:mr-2" />
						<div className='flex flex-row items-center h-full my-auto'>
							<h1 className='inline text-xl md:text-2xl'>
								Future
							</h1>
							<span className='inline text-xl md:text-2xl font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>
								Vuls
							</span>
						</div>
					</a>
					<div className="flex-1 hidden md:flex items-end justify-start gap-4 lg:gap-12 text-md">
						<a href="/#使い方" className="text-[#333333] font-medium">機能詳細</a>
						<a href="/#利用例" className="text-[#333333] font-medium">料金</a>
						<a href="/#特徴" className="text-[#333333] font-medium">コンサル</a>
						<a href="/#料金" className="text-[#333333] font-medium">FAQ</a>
						<a href="/#料金" className="text-[#333333] font-medium">ドキュメント</a>
						<a href="/editor" className="text-[#333333] font-medium">ブログ</a>
					</div>
					<button className="hidden md:block bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded">
						無料デモ・お問い合わせ
					</button>
					<button className="md:hidden bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-4 py-1 md:px-4 md:py-2 rounded">
						お問い合わせ
					</button>
				</div>
			</header>
			<main>
				<section>
					<div className='max-w-7xl mx-auto px-4 py-8 md:pt-20 lg:pt-32 md:pb-20'>
						<div className='flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-4'>
							<div className='text-center lg:text-left w-full lg:w-[75%] flex flex-col items-start lg:items-start'>
								<h1 className='text-4xl md:text-5xl font-bold text-center lg:text-left tracking-tighter text-[#333333] mb-5 md:mb-8'>
									The best <span className='text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>Vulnerability</span><br/>
									Management System in Japan
								</h1>
								<h2 className='text-lg md:text-2xl font-bold text-[#333333] text-center lg:text-left mb-5 md:mb-8 border-white border-2 border-solid hover:border-violet-500 hover:border-2 hover:border-solid'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</h2>
								<ul className='md:block text-md md:text-xl leading-relaxed space-y-1 mb-5 md:mb-8 mx-auto md:mx-0'>
									<li className='flex items-center justify-start lg:justify-start gap-1.5'>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
											<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
										</svg>
										Largest vulnerability scanner base on Vuls
									</li>
									<li className='flex items-center justify-start lg:justify-start gap-1.5'>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
											<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
										</svg>
										Effective prioritisation using SSVC
									</li>
									<li className='flex items-center justify-start lg:justify-start gap-1.5'>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
											<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
										</svg>
										Automated vulnerability management
									</li>
								</ul>
								<button className="text-lg md:text-2xl bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-8 py-3 rounded-lg mx-auto md:mx-0">
									無料デモ・お問い合わせ
								</button>
							</div>
							<div className='w-full select-none order-first md:order-last mb-5 md:mb-0'>
								<img src="hero.png" alt="hero" />
							</div>
						</div>
					</div>
				</section>
				<section id='導入事例' className='bg-[#F2F2F2]'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<Carousel className='w-full'>
							<div className='flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-12 mb-6 md:mb-10'>
								<div className='flex flex-row justify-between items-center text-center w-full'>
									<h3 className='text-lg md:text-3xl font-bold text-[#333333] text-center'>導入事例</h3>
									<div>
										<CarouselPrevious className='h-9 w-9 mr-4' />
										<CarouselNext className='h-9 w-9' />
									</div>
								</div>
							</div>
							<CarouselContent>
								<CarouselItem className="basis-5/6 md:basis-1/3">
									<Card>
										<CardHeader>
											<CardTitle className='h-4 md:h-8 flex flex-row items-center mx-auto text-lg'>
												<img className='hidden md:block max-w-full shrink object-contain' src="./jtb.png" alt="株式会社JTB" />
												<h4 className='text-lg flex-none ml-3 text-[#333333] whitespace-nowrap'>株式会社JTB 様</h4>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<img className='object-contain' src="./jtb_group_image.png" alt="株式会社JTB グループ写真" />
											<h5 className='h-16 mt-6 font-medium text-md md:text-xl text-center'>
												手作業の9割が自動化、1人月分以上の工数を削減
											</h5>
										</CardContent>
									</Card>
								</CarouselItem>
								<CarouselItem className="basis-5/6 md:basis-1/3">
									<Card>
										<CardHeader>
											<CardTitle className='h-4 md:h-8 flex flex-row items-center mx-auto text-lg'>
												<img className='hidden md:block max-w-full shrink object-contain' src="./smart_hr.png" alt="株式会社SmartHR" />
												<h4 className='flex-none ml-3 text-[#333333] whitespace-nowrap'>株式会社SmartHR 様</h4>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<img className='object-contain' src="./smart_hr_group_image.png" alt="株式会社SmartHR グループ写真" />
											<h5 className='h-16 mt-6 font-medium text-md md:text-xl text-center'>
												まずは1台からスモールスタート、コンテナ脆弱性をSmartに統合管理
											</h5>
										</CardContent>
									</Card>
								</CarouselItem>
								<CarouselItem className="basis-5/6 md:basis-1/3">
									<Card>
										<CardHeader>
											<CardTitle className='h-4 md:h-8 flex flex-row items-center mx-auto text-lg'>
												<img className='hidden md:block max-w-full shrink object-contain' src="./akatsuki.png" alt="株式会社アカツキ" />
												<h4 className='flex-none ml-3 text-[#333333] whitespace-nowrap'>株式会社アカツキ 様</h4>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<img className='object-contain' src="./akatsuki_group_image.png" alt="株式会社アカツキ グループ写真" />
											<h5 className='h-16 mt-6 font-medium text-md md:text-xl text-center'>
												セキュリティは「コスト」ではなく「投資」
											</h5>
										</CardContent>
									</Card>
								</CarouselItem>
								<CarouselItem className="basis-5/6 md:basis-1/3">
									<Card>
										<CardHeader>
											<CardTitle className='h-4 md:h-8 flex flex-row items-center mx-auto text-lg'>
												<img className='hidden md:block max-w-full shrink object-contain' src="./sompo.png" alt="損害保険ジャパン株式会社" />
												<h4 className='flex-none ml-3 text-[#333333] whitespace-nowrap'>損害保険ジャパン株式会社 様</h4>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<img className='object-contain' src="./sompo_group_image.png" alt="株式会社JTB グループ写真" />
											<h5 className='h-16 mt-6 font-medium text-md md:text-xl text-center'>
												運用のレベルが1つ上がりました
											</h5>
										</CardContent>
									</Card>
								</CarouselItem>
								<CarouselItem className="basis-5/6 md:basis-1/3">
									<Card>
										<CardHeader>
											<CardTitle className='h-4 md:h-8 flex flex-row items-center mx-auto text-lg'>
												<img className='hidden md:block max-w-full shrink object-contain' src="./mainavi.png" alt="株式会社JTB" />
												<h4 className='flex-none ml-3 text-[#333333] whitespace-nowrap'>株式会社JTB 様</h4>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<img className='object-contain' src="./mainavi_group_image.png" alt="株式会社JTB グループ写真" />
											<h5 className='h-16 mt-6 font-medium text-md md:text-xl text-center'>
												Log4Shellのような経験はもう二度としない
											</h5>
										</CardContent>
									</Card>
								</CarouselItem>
							</CarouselContent>
						</Carousel>
					</div>
				</section>
				<section id=''>
					<div className='max-w-[106rem] mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className="w-full flex flex-row flex-wrap justify-center gap-x-4 md:gap-x-14 lg:gap-x-18">
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_class_method.png" alt="logo_class_methodlogo_class_method" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_akatsuki.png" alt="logo_akatsukilogo_akatsuki" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_board.png" alt="logo_board" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_jtb.png" alt="logo_jtb" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_boldly.png" alt="logo_boldly" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_kdl.png" alt="logo_kdl" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_cloud_native.png" alt="logo_cloud_native" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_hitachi.png" alt="logo_hitachi" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_smarthr.png" alt="logo_smarthr" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_bunnkasho.png" alt="logo_bunnkasho" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_morinaga.png" alt="logo_morinaga" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_bookoff.png" alt="logo_bookoff" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_dentsu.png" alt="logo_dentsu" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_sompo.png" alt="logo_sompo" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_kawase.png" alt="logo_kawase" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_biccamera.png" alt="logo_biccamera" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_dental_hearts.png" alt="logo_dental_hearts" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_future.png" alt="logo_future" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_ntt_docomo.png" alt="logo_ntt_docomo" />
							<img className='w-[20%] md:w-1/6 lg:w-[11%]' src="logo_mainavi.png" alt="logo_mainavi" />
						</div>
					</div>
				</section>
				<section id='仕組み' className='bg-[#BCCCF5]/[.20]'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className='flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-12 mb-8 md:mb-16'>
							<div className='flex flex-col text-center w-full'>
								<h2 className='text-xs md:text-lg font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>HOW IT WORKS</h2>
								<h3 className='text-lg md:text-3xl font-bold text-[#333333] text-center'>FutureVulsの仕組み</h3>
							</div>
						</div>
						<div className='w-full flex flex-col'>
							<div className='bg-white rounded-xl py-2 md:py-6 px-2 md:px-20 mb-6'>
								<img src="how_it_works.png" alt="How it works" />
							</div>
							<div className='flex flex-col md:flex-row gap-6'>
								<div className='w-full bg-white rounded-xl py-4 md:py-6 px-6 md:px-10'>
									<h4 className='text-xl font-bold mb-4'>1. 情報収集・脆弱性検出</h4>
									<p className='text-md'>
										年間2万件以上の脆弱性が新たに公開されています 自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変 Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
									</p>
								</div>
								<div className='w-full bg-white rounded-xl py-4 md:py-6 px-6 md:px-10'>
									<h4 className='text-xl font-bold mb-4'>2. 影響調査・対策検討</h4>
									<p className='text-md'>
										年間2万件以上の脆弱性が新たに公開されています 自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変 Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
									</p>
								</div>
								<div className='w-full bg-white rounded-xl py-4 md:py-6 px-6 md:px-10'>
									<h4 className='text-xl font-bold mb-4'>3. パッチ適用</h4>
									<p className='text-md'>
										年間2万件以上の脆弱性が新たに公開されています 自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変 Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='特徴'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className='flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-12 mb-8 md:mb-16'>
							<div className='flex flex-col text-center w-full'>
								<h2 className='text-xs md:text-lg font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>FEATURES</h2>
								<h3 className='text-lg md:text-3xl font-bold text-[#333333] text-center'>特徴</h3>
							</div>
						</div>
						<div className='w-full flex flex-col gap-10 px-3 md:px-0'>
							<div className='flex flex-col md:flex-row md:gap-10'>
								<div className='md:w-1/2 bg-white rounded-xl pb-6 md:py-0'>
									<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] mb-1'>1 SSVCモデルを使用した優先度付け</h3>
									<h4 className='text-xl font-bold mb-4'>脆弱性スキャナとしての高い支持</h4>
									<p className='text-md mb-4'>
										年間2万件以上の脆弱性が新たに公開されています
										自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変
										Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
										システム内の脆弱性を可視化し、対応が必要な脆弱性に注力できます
									</p>
									<a href="/" className='text-[#BDBDBD] hover:underline'>詳細を見る</a>
								</div>
								<div className='md:w-1/2'>
									<img src="ssvc_model.png" alt="" />
								</div>
							</div>
							<div className='flex flex-col md:flex-row-reverse md:gap-10'>
								<div className='md:w-1/2 bg-white rounded-xl pb-6 md:py-0'>
									<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] mb-1'>2 脆弱性スキャナとしての高い支持</h3>
									<h4 className='text-xl font-bold mb-4'>脆弱性スキャナとしての高い支持</h4>
									<p className='text-md mb-4'>
										年間2万件以上の脆弱性が新たに公開されています
										自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変
										Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
										システム内の脆弱性を可視化し、対応が必要な脆弱性に注力できます
									</p>
									<a href="/" className='text-[#BDBDBD] hover:underline'>詳細を見る</a>
								</div>
								<div className='md:w-1/2'>
									<img src="vuls_github.png" alt="" />
								</div>
							</div>
							<div className='flex flex-col md:flex-row md:gap-10'>
								<div className='md:w-1/2 bg-white rounded-xl pb-6 md:py-0'>
									<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] mb-1'>3 脆弱性対応フローの自動化</h3>
									<h4 className='text-xl font-bold mb-4'>脆弱性スキャナとしての高い支持</h4>
									<p className='text-md mb-4'>
										年間2万件以上の脆弱性が新たに公開されています
										自分が管理するシステムに関係する脆弱性なのかを１つ１つ確認するのは大変
										Vulsは管理下のシステムに関係する脆弱性のみ検出し、判断に必要な情報をまとめて表示
										システム内の脆弱性を可視化し、対応が必要な脆弱性に注力できます
									</p>
									<a href="/" className='text-[#BDBDBD] hover:underline'>詳細を見る</a>
								</div>
								<div className='md:w-1/2'>
									<img src="vuls_screenshot.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='料金' className='bg-gradient-to-bl from-[#FFCE15]/[0.10] to-[#FF9900]/[0.10]'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className='flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-12 mb-8 md:mb-16'>
							<div className='flex flex-col text-center w-full'>
								<h2 className='text-xs md:text-lg font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>PRICING</h2>
								<h3 className='text-lg md:text-3xl font-bold text-[#333333] text-center'>料金</h3>
							</div>
						</div>
						<div className="flex justify-center px-4 md:px-0">
							<div className="w-full md:w-5/6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 rounded-lg md:rounded-xl shadow-[0_0_25px_rgba(235,87,87,0.27)]">
								{/* Left Column */}
								<div className="bg-white p-8 rounded-lg md:rounded-none md:rounded-l-xl shadow-md flex flex-col justify-between items-center">
									<div className='w-full'>
										<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>OSS Vuls</h3>
										<h4 className='text-lg md:text-xl font-bold mb-2 md:mb-4'>オープンソースVuls</h4>
										<p className='mb-2 md:mb-4 text-[#333333]'>脆弱性をスキャン</p>
										<p className='text-lg md:text-2xl text-[#333333] font-bold tracking-tighter pb-8 md:pb-10'>
											<span className='text-3xl md:text-4xl font-black'>無料</span>
										</p>
										<ul className='text-md text-[#333333] pb-10 md:pb-12'>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Linux スキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Windowsスキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>SBOM対応</p>
											</li>
										</ul>
									</div>
									<button className="w-full text-lg md:text-xl bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-8 py-2 rounded-lg">
										今すぐはじめる
									</button>
								</div>

								{/* Middle Column */}
								<div className="bg-white p-8 shadow-md flex flex-col justify-between items-center">
									<div className='w-full'>
										<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>Standard</h3>
										<h4 className='text-lg md:text-xl font-bold mb-2 md:mb-4'>FutureVuls Standard</h4>
										<p className='mb-2 md:mb-4 text-[#333333]'>脆弱性を管理</p>
										<p className='text-lg md:text-xl text-[#333333] font-bold tracking-tighter pb-8 md:pb-10'>
											<span className='text-3xl md:text-4xl font-black'>4,000</span>円より
										</p>
										<ul className='text-md text-[#333333] pb-10 md:pb-12'>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Linux スキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Windowsスキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>SBOM対応</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>チケット管理</p>
											</li>
										</ul>
									</div>
									<button className="w-full text-lg md:text-xl bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-8 py-2 rounded-lg">
										今すぐはじめる
									</button>
								</div>

								{/* Right Column */}
								<div className="bg-white p-8 rounded-lg md:rounded-none md:rounded-r-xl shadow-md flex flex-col justify-between items-center">
									<div className='w-full'>
										<h3 className='text-sm md:text-md font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>CSIRT</h3>
										<h4 className='text-lg md:text-xl font-bold mb-2 md:mb-4'>FutureVuls CSIRT</h4>
										<p className='mb-2 md:mb-4 text-[#333333]'>全社の脆弱性を横断管理</p>
										<p className='text-lg md:text-2xl text-[#333333] font-bold tracking-tighter pb-8 md:pb-10'>
											<span className='text-3xl md:text-4xl font-black'>要見積</span>
										</p>
										<ul className='text-md text-[#333333] pb-10 md:pb-12'>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Linux スキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>Windowsスキャン</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>SBOM対応</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>チケット管理</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>資産管理</p>
											</li>
											<li className='flex items-center justify-start lg:justify-start gap-1.5 pb-1 mb-1'>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-green-500">
													<path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
												</svg>
												<p className='w-full text-center'>自働トリアージ</p>
											</li>
										</ul>
									</div>
									<button className="w-full text-lg md:text-xl bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold px-8 py-2 rounded-lg">
										今すぐはじめる
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='よくある質問'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className='grid grid-cols-1 md:grid-cols-2'>
							<div className='hidden md:block'>
								<div className='flex flex-col w-full'>
									<h2 className='md:text-lg font-bold text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>FAQ</h2>
									<h3 className='text-lg md:text-3xl font-bold text-[#333333]'>よくある質問</h3>
								</div>
							</div>
							<div>
								<ul>
									<li>
										<Collapsible title="FutureVulsの通信要件について教えてください">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="OSバージョンの要件について教えてください">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="FutureVulsが使用するIPアドレスについて教えてください">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="FutureVulsの利用約款やサービス仕様書を教えてください">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="FutureVulsの二次利用と再販について">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="ユーザのログイン履歴を確認したい">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="設定済みのMFAを無効化したい">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
									<li>
										<Collapsible title="サーバに対してどの程度の負荷がかかりますか">
											<p>FutureVulsが対応しているスキャナプログラムによる脆弱性スキャンが可能なOSについては、次のマニュアルをご参照ください。</p>
										</Collapsible>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className='bg-[#333333]'>
					<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
						<div className='flex items-center lg:items-start justify-center flex-col gap-8 lg:gap-12'>
							<div className='flex flex-col text-center w-full'>
								<h3 className='text-2xl md:text-3xl font-bold text-white text-center'>今すぐシステムの<span className='text-gradient bg-gradient-to-bl from-[#FFCE15] to-[#FF9900]'>脆弱性</span>を可視化しましょう!</h3>
							</div>
							<button className="w-[65%] md:w-[35%] text-xl md:text-2xl bg-gradient-to-bl from-[#FFCE15] to-[#FF9900] text-white font-bold py-3 mx-auto rounded-lg">
								無料ではじめる
							</button>
						</div>
					</div>
				</section>
			</main>
			<footer className='bg-[#F8F8F8]'>
				<div className='max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-20'>
					<div className='grid grid-cols-2 md:grid-cols-5 gap-2 lg:gap-6 px-0 md:px-20'>
						<div className='col-span-2 md:col-span-2 mb-6 md:mb-0'>
							<a href="/#" className='flex gap-2 items-center justify-center md:justify-normal hover:bg-base-200 rounded pb-3'>
								<img src="vuls.svg" alt="ロゴ" className="h-12" />
								<h1 className='text-lg leading-4 md:text-2xl md:leading-6 title2'>FutureVuls</h1>
							</a>
							<p className='text-center md:text-left text-sm text-[#333333] pb-3'>フューチャー株式会社</p>
							<p className='text-center md:text-left text-sm text-[#828282]'>〒141-0032</p>
							<p className='text-center md:text-left text-sm text-[#828282]'>東京都品川区大崎1-2-2</p>
							<p className='text-center md:text-left text-sm text-[#828282]'>アートヴィレッジ大崎セントラルタワー</p>
						</div>
						<div className='col-span-1 text-sm text-center md:text-left mb-4 md:mb-0'>
							<h5 className='text-[#333333] mb-2'>サービス紹介</h5>
							<ul className='text-[#828282] leading-relaxed md:leading-loose'>
								<li className='hover:underline'>導入事例</li>
								<li className='hover:underline'>特徴</li>
								<li className='hover:underline'>FutureVulsの仕組み</li>
								<li className='hover:underline'>セキュリティコンサルティング</li>
							</ul>
						</div>
						<div className='col-span-1 text-sm text-center md:text-left mb-4 md:mb-0'>
							<h5 className='text-[#333333] mb-2'>ドキュメント</h5>
							<ul className='text-[#828282] leading-relaxed md:leading-loose'>
								<li className='hover:underline'>マニュアル</li>
								<li className='hover:underline'>リリースノート</li>
								<li className='hover:underline'>ヘルプ</li>
							</ul>
						</div>
						<div className='col-span-1 text-sm text-center md:text-left mb-4 md:mb-0'>
							<h5 className='text-[#333333] mb-2'>SNS</h5>
							<ul className='text-[#828282] leading-relaxed md:leading-loose'>
								<li className='hover:underline'>X</li>
								<li className='hover:underline'>ブログ</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
  )
}

export default App
