import { getEducationTab, getExperienceTab, getInformationTab, getProjectsTab } from './Tabs';
import { type TabListButton, TabIds } from './types';
import { createSignal, type Component, For, Show } from 'solid-js';
import { Fa } from 'solid-fa';
import { faDiscord, faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

const [selectedTabId, setSelectedTabId] = createSignal(TabIds.Information);
const [menuOpen, setMenuOpen] = createSignal(false);

function showText(id: number) {
  switch (id) {
    case TabIds.Information:
      return getInformationTab();
    case TabIds.Education:
      return getEducationTab();
    case TabIds.Experience:
      return getExperienceTab();
    case TabIds.Projects:
      return getProjectsTab();
    default:
      return "No content available";
  }
}

function createButtonList(buttons: TabListButton[]) {
  return (
    <For each={buttons}>
      {(item) => (
        <button
          onClick={() => {
            setSelectedTabId(item.id);
            setMenuOpen(false);
          }}
          classList={{
            'active-button': selectedTabId() === item.id,
            'default-button': selectedTabId() !== item.id,
            'md:mt-8': item.id === 0,
            'md:ml-8': true,
            'w-full md:w-auto text-left p-2 md:p-0': true,
          }}
        >
          {item.text}
        </button>
      )}
    </For>
  );
}

const tabButtonList: TabListButton[] = [
  {
    id: TabIds.Information,
    text: "Information"
  },
  {
    id: TabIds.Experience,
    text: "Experience"
  },
  {
    id: TabIds.Projects,
    text: "Projects"
  },
  {
    id: TabIds.Education,
    text: "Education"
  },
]

const App: Component = () => {
  return (
    <div class="container flex flex-col mx-auto py-4 md:py-20">
      <div class="w-full flex flex-row px-4 md:pl-6 md:pb-6 pb-0 justify-between items-center">
        <p class="text-white md:pl-0 pl-6">Anttoni Koivu</p>
        <div class="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen())}>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={menuOpen() ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="hidden md:flex flex-row h-full">
        <div class="w-1/4 flex content flex-col gap-2 tracking-tight">
          {createButtonList(tabButtonList)}
        </div>
        <div class="md:w-1/2 w-full flex content">
          {showText(selectedTabId())}
        </div>
        <div class="w-1/4 flex flex-col content gap-2">
          <div class="flex justify-center mx-auto mt-8">
            <img src="/images/me.png" />
          </div>
          <div class="divider" />
          <div class="flex flex-col flex-wrap gap-2 w-full">
            <div class="flex flex-row pb-2 justify-center gap-2 lg:justify-between lg:mx-auto">
              <a href="https://www.linkedin.com/in/anttoni-koivu-a55070230/" target="_blank" class="flex items-center gap-2 p-1">
                <span class="text-3xl"><Fa icon={faLinkedin} /></span>
                <span class="text-md">LinkedIn</span>
              </a>
              <a href="https://www.linkedin.com/in/anttoni-koivu-a55070230/" target="_blank" class="flex items-center gap-2 p-1">
                <span class="text-3xl"><Fa icon={faGithub} /></span>
                <span class="text-md">Github</span>
              </a>
            </div>
            <div class="flex flex-row justify-center gap-4 lg:justify-between lg:mx-auto">
              <div class="flex flex-row items-center gap-2">
                <span class="text-3xl"><Fa icon={faDiscord} /></span>
                <span class="text-md">Anttonii</span>
              </div>
              <div class="flex flex-row items-center gap-2">
                <span class="text-3xl"><Fa icon={faTelegram} /></span>
                <span class="text-md">Anttoniii</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden grow flex flex-col px-4 py-4">
        <Show
          when={menuOpen()}
          fallback={<div class="grow">{showText(selectedTabId())}</div>}
        >
          <div class="w-full flex content flex-col tracking-tight mt-4">
            {createButtonList(tabButtonList)}
          </div>
        </Show>
      </div>
    </div>
  );
};

export default App;
