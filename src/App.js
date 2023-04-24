export default function App() {
  return (
    <>
    <header class="p-4 bg-gray-800 text-gray-100">
        <div class="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
            <ul class="items-stretch hidden space-x-3 md:flex">
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</a>
                </li>
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</a>
                </li>
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</a>
                </li>
            </ul>
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 text-violet-400">
                    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                    <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                </svg>
            </a>
            <ul class="items-stretch hidden space-x-3 md:flex">
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</a>
                </li>
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Portfolio</a>
                </li>
                <li class="flex">
                    <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 border-transparent">Team</a>
                </li>
            </ul>
            <button title="Button" type="button" class="p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-100">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    <section>
    <div class="dark:dark:bg-violet-400">
        <div class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:dark:text-gray-900">
            <h1 class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:dark:text-gray-900">Welcome to Mamba</h1>
            <p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:dark:text-gray-900">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
            <div class="flex flex-wrap justify-center">
                <button type="button" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:dark:bg-gray-800 dark:dark:text-gray-50">Get started</button>
                <button type="button" class="px-8 py-3 m-2 text-lg border rounded dark:dark:border-gray-700 dark:dark:text-gray-900">Learn more</button>
            </div>
        </div>
    </div>
    <img src="https://bootstrapmade.com/demo/templates/Mamba/assets/img/slide/slide-2.jpg" alt="" class="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:dark:bg-gray-500"/>
</section>
<section class="bg-gray-800 text-gray-100">
        <div class="container flex flex-col-reverse mx-auto lg:flex-row">
            <div class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-400 text-gray-900">
                <div class="flex space-x-2 sm:space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    <div class="space-y-2">
                        <p class="text-lg font-medium leading-snug">About Us</p>
                        <p class="leading-snug">All the components are just good ol' HTML and CSS, but without the need of writing complex css rules thanks to Tailwind CSS.</p>
                    </div>
                </div>
                <div class="flex space-x-2 sm:space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    <div class="space-y-2">
                        <p class="text-lg font-medium leading-snug">Our purpose</p>
                        <p class="leading-snug">We let innovaters create the next break through in machine learnings</p>
                    </div>
                </div>
                <div class="flex space-x-2 sm:space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    <div class="space-y-2">
                        <p class="text-lg font-medium leading-snug">Content</p>
                        <p class="leading-snug">Mamba UI is an UI kit with free components and templates styled with Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 xl:w-3/5 bg-gray-800">
                <div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <img src="https://bootstrapmade.com/demo/templates/Mamba/assets/img/about.jpg" alt="" class="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"/>
                </div>
            </div>
        </div>
    </section><br/><br/>
    <section class="m-4 md:m-8 bg-gray-800 text-gray-100">
        <div class="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 class="text-5xl font-bold">Built to empower every team</h2>
            <p class="text-gray-400">Libero minima optio qui</p>
        </div>
        <div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Lorem Ipsum</h3>
                <div class="space-y-1 leading-tight">
                    <p>Ulamco laboris nisi ut</p>
                    <p>aliquip ex ea commodo consequat.</p>
                    <p> Et consectetur ducimus vero placeat</p>
                    
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Repellat Nihil</h3>
                <div class="space-y-1 leading-tight">
                    <p>Dolorem est fugiat occaecati voluptate</p>
                    <p> velit esse. Dicta veritatis dolor </p>
                    <p> quod et vel dire leno para dest</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Ad ad velit qui</h3>
                <div class="space-y-1 leading-tight">
                    <p>Similique quas ea veniam</p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Repellendus molestiae</h3>
                <div class="space-y-1 leading-tight">
                    <p>Similique quas ea veniam</p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Sapiente Magnam</h3>
                <div class="space-y-1 leading-tight">
                    <p>Similique quas ea veniam</p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-violet-400">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="my-3 text-3xl font-semibold">Facilis Impedit</h3>
                <div class="space-y-1 leading-tight">
                    <p>Similique quas ea veniam</p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
        </div>
    </section>
    <section class="m-4 md:m-8 bg-gray-800 text-gray-100">
        <div class="container p-4 mx-auto my-6 space-y-1 text-center">
            <h2 class="pb-3 text-3xl font-bold md:text-4xl">Services</h2>
        </div>
        <div class="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Components</h2>
                <p class="flex-1 mb-4 text-base leading-relaxed text-gray-400">Individual components that can be re-used multiple times in your designs.</p>
                <a class="inline-flex items-center space-x-2 text-sm text-violet-400" href="/components">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Sections</h2>
                <p class="flex-1 mb-4 text-base leading-relaxed text-gray-400">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
                <a class="inline-flex items-center space-x-2 text-sm text-violet-400" href="/sections">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Templates</h2>
                <p class="flex-1 mb-4 text-base leading-relaxed text-gray-400">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
                <a class="inline-flex items-center space-x-2 text-sm text-violet-400" href="/templates">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Customization</h2>
                <p class="flex-1 mb-4 text-base leading-relaxed text-gray-400">Choose your primary color from any of the Tailwind CSS 2.0 colors. You can also view all of the components in our light and dark themes.</p>
                <a class="inline-flex items-center space-x-2 text-sm text-violet-400" href="/docs">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
    <section class="bg-gray-800 text-gray-100">
        <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">Our Portfolio</h1>
            <p class="px-8 mt-8 mb-12 text-lg"></p>
            <div class="flex flex-wrap justify-center">
            </div>
        </div>
    </section>
    <section class="py-6 bg-gray-800">
        <div class="container flex flex-col justify-center p-4 mx-auto">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img class="object-cover w-full bg-gray-500 aspect-square" src="https://bootstrapmade.com/demo/templates/Mamba/assets/img/portfolio/portfolio-1.jpg"/>
                <img class="object-cover w-full bg-gray-500 aspect-square" src="https://bootstrapmade.com/demo/templates/Mamba/assets/img/portfolio/portfolio-4.jpg"/>
                <img class="object-cover w-full bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3"/>
                <img class="object-cover w-full bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4"/>
            </div>
        </div>
    </section>
    <section class="py-6 bg-gray-800 text-gray-100">
        <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p class="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
            <h1 class="text-4xl font-bold leading-none text-center sm:text-5xl">Our Team Members</h1>
            <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                        <p>Visual Designer</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">Walter White</p>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">Sarah Jhonson</p>
                        <p>Products Manager</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">William Anderson</p>
                        <p>CTO</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">Amanda Jepson</p>
                        <p>Accountants</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5"/>
                    <div class="flex-1 my-4">
                        <p class="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                        <p>Visual Designer</p>
                    </div>
                    <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a rel="noopener noreferrer" href="#" title="Email" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="LinkedIn" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" class="text-gray-900 hover:text-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section><br/><br/><br/><br/>
    <section class="bg-gray-800 text-gray-100">
        <div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div class="divide-y divide-gray-700">
                <div class="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 class="font-semibold md:col-span-5">Optio maiores eligendi molestiae totam dolores similique?</h3>
                    <p class="md:pl-0 md:col-span-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                </div>
                <div class="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 class="font-semibold md:col-span-5">Optio maiores eligendi molestiae totam dolores similique?</h3>
                    <p class="md:pl-0 md:col-span-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                </div>
                <div class="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 class="font-semibold md:col-span-5">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</h3>
                    <p class="md:pl-0 md:col-span-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                </div>
                <div class="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 class="font-semibold md:col-span-5">Magni reprehenderit possimus debitis?</h3>
                    <p class="md:pl-0 md:col-span-7">Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-6 bg-gray-800 text-gray-50">
        <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
                <h1 class="text-4xl font-bold">Get in touch</h1>
                <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
                <div class="space-y-4">
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Fake address, 9999 City</span>
                    </p>
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>123456789</span>
                    </p>
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>contact@business.com</span>
                    </p>
                </div>
            </div>
            <form novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                <label class="block">
                    <span class="mb-1">Full name</span>
                    <input type="text" placeholder="Leroy Jenkins" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"/>
                </label>
                <label class="block">
                    <span class="mb-1">Email address</span>
                    <input type="email" placeholder="leroy@jenkins.com" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"/>
                </label>
                <label class="block">
                    <span class="mb-1">Message</span>
                    <textarea rows="3" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"></textarea>
                </label>
                <button type="button" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
            </form>
        </div>
    </section>
    <footer class="px-4 divide-y bg-gray-800 text-gray-100">
        <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div class="lg:w-1/3">
                <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                    </div>
                    <span class="self-center text-2xl font-semibold">Mamba</span>
                </a>
            </div>
            <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <div class="space-y-3">
                    <h3 class="tracking-wide uppercase text-gray-50">Product</h3>
                    <ul class="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Features</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Integrations</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Pricing</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <h3 class="tracking-wide uppercase text-gray-50">Company</h3>
                    <ul class="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <h3 class="uppercase text-gray-50">Developers</h3>
                    <ul class="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Public API</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Documentation</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Guides</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <div class="uppercase text-gray-50">Social media</div>
                    <div class="flex justify-start space-x-3">
                        <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current">
                                <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 text-sm text-center text-gray-400">© Apurva. All rights reserved.</div>
    </footer>

</>
  )
}