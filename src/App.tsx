import { getEducationTab, getExperienceTab, getInformationTab, getInterestsTab, getProjectsTab } from './Tabs';
import { type TabListButton, TabIds } from './types';
import { createSignal, type Component, For, Show } from 'solid-js';

const [selectedTabId, setSelectedTabId] = createSignal(1);
const [menuOpen, setMenuOpen] = createSignal(false);

function showText(id: number) {
  switch (id) {
    case TabIds.Information:
      return getInformationTab();
    case TabIds.Education:
      return getEducationTab();
    case TabIds.Experience:
      return getExperienceTab();
    case TabIds.Interests:
      return getInterestsTab();
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
            'md:mt-8': item.id === 1,
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
    id: TabIds.Education,
    text: "Education"
  },
  {
    id: TabIds.Experience,
    text: "Experience"
  },
  {
    id: TabIds.Interests,
    text: "Interests"
  },
  {
    id: TabIds.Projects,
    text: "Projects"
  }
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
        <div class="w-1/4 flex content"></div>
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
