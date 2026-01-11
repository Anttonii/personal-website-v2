import { Fa } from "solid-fa"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

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
                    <a href="https://leetcode.com/u/Anttoni/" target="_blank" class="p-2">Leetcode</a>
                </div>
                <div class="align-right md:mx-12 mx-auto">
                    <a href="https://codeforces.com/profile/Anttonii" target="_blank" class="p-2"
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
            <div class="flex flex-row justify-between">
                <p class="text-md">Sanoma</p>
                <p class="text-sm">04.2025 - Present</p>
            </div>
            <div class="divider" />
            <div class="flex">
                <p class="text-sm">
                    Started as an intern in April of 2025, moved to a full-time Software Developer role in December of 2025.
                    <br />
                    <br />
                    Main focus on AI-powered internal tooling for journalists. Developed and trained various machine learning models used for classifying news value and recommending images for an article.
                </p>
            </div>
        </div>
    )
}

export function getProjectsTab() {
    return (
        <div class="tab-container flex flex-col md:mt-8 mt-4 md:ml-6 mx-auto gap-2 md:p-0 p-4">
            <div>
                <h2 class="pb-3">
                    <a
                        href="https://github.com/Anttonii/archimago-bot"
                        class="link-text"
                        target="_blank"
                    >Archimago<span class="text-md inline-flex align-baseline pl-2">
                            <Fa icon={faUpRightFromSquare} />
                        </span></a>
                </h2>
                <p class="text-sm tracking-tight">
                    A discord chat bot that provides data and images of Sorcery TCG. Built for the
                    Sorcery TCG Finland discord group.
                </p>
            </div>
            <div class="divider"></div>
            <div>
                <h2 class="pb-3">
                    <a href="https://github.com/Anttonii/jaydee" class="link-text" target="_blank">
                        Jaydee<span class="text-md inline-flex align-baseline pl-2">
                            <Fa icon={faUpRightFromSquare} />
                        </span>
                    </a>
                </h2>
                <p class="text-sm tracking-tight">
                    Scrape and crawl internet with the use of a .json schema. Built to scrape data
                    for machine learning related projects.
                </p>
            </div>
            <div class="divider"></div>
            <div>
                <h2 class="pb-3">
                    <a
                        href="https://github.com/Anttonii/hullifier"
                        class="link-text"
                        target="_blank"
                    >Hullifier<span class="text-md inline-flex pl-2">
                            <Fa icon={faUpRightFromSquare} />
                        </span>
                    </a>
                </h2>
                <p class="text-sm tracking-tight">
                    Visualizes convex hull solving algorithms in 2D. Currently working on extending
                    functionality to 3D.
                </p>
            </div>
        </div>
    )
}