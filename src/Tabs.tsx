export function getInformationTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <p class="text-sm tracking-tight pb-4">
                Hi! I'm a 26 year old software developer located in Finland. I enjoy building
                software and solving problems. I'm especially interested in everything data
                related and am currently studying Machine Learning and Data Science.
                <br />
                <br />
                Outside of programming, I am also passionate about basketball, weightlifting and video
                games.
                <br />
                <br />
                I've also taken a keen interest in competitive programming, you can view my profiles
                here:
            </p>
            <div class="flex md:flex-row justify-center gap-1">
                <div class="align-left md:mx-12 mx-auto">
                    <a href="https://leetcode.com/u/Anttoni/" target="_blank">Leetcode</a>
                </div>
                <div class="align-right md:mx-12 mx-auto">
                    <a href="https://codeforces.com/profile/Anttonii" target="_blank"
                    >Codeforces</a>
                </div>
            </div>
        </div>
    )
}

export function getEducationTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <h2>Masters of Computer Science</h2>
            <div class="flex flex-wrap">
                <div class="w-full basis-1/3 md:basis-2/3">
                    <h4 class="pt-1 relative">Aalto</h4>
                </div>
                <div class="w-full basis-2/3 md:basis-1/3">
                    <h4 class="pt-1 relative">2024 - 2026</h4>
                </div>
            </div>
            <p class="text-sm pt-2 tracking-tight">
                - Currently enrolled to study Machine Learning, Data Science and Artificial
                Intelligence as a masters major in Aalto. <br />
            </p>

            <div class="divider pt-4"></div>

            <h2 class="pt-4">Bachelors of Computer Science</h2>
            <div class="flex flex-wrap md:justify-baseline justify-center">
                <div class="w-full basis-1/3 md:basis-2/3">
                    <h4 class="pt-1 relative">Aalto</h4>
                </div>
                <div class="w-full basis-2/3 md:basis-1/3">
                    <h4 class="pt-1 relative">2021 - 2024</h4>
                </div>
            </div>
            <p class="text-sm pt-2 tracking-tight">
                - Wrote my Bachelors thesis about 3SUM and subset sum problems. <br />
                - Minor in Bioinformation Technology.
            </p>
        </div>
    )
}

export function getExperienceTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <p>Experience content</p>
        </div>
    )
}

export function getInterestsTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <p>Interests content</p>
        </div>
    )
}

export function getProjectsTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <p>Projects content</p>
        </div>
    )
}