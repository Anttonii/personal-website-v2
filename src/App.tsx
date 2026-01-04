import { getEducationTab, getExperienceTab, getInformationTab, getInterestsTab, getProjectsTab } from './Tabs';
import { type TabListButton, TabIds } from './types';
import { createSignal, type Component, For } from 'solid-js';

const [selectedTabId, setSelectedTabId] = createSignal(1);

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
          onClick={() => setSelectedTabId(item.id)}
          classList={{
            'active-button': selectedTabId() === item.id,
            'default-button': selectedTabId() !== item.id,
            'mt-8': item.id === 1,
            'ml-8': true,
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
    <div class="container flex flex-col mx-auto py-20">
      <div class="w-full flex flex-row pl-6 pb-6">
        <p class="text-white title-text">Anttoni Koivu</p>
      </div>
      <div class="flex flex-row h-full">
        <div class="w-1/4 flex content flex-col gap-2 tracking-tight">
          {createButtonList(tabButtonList)}
        </div>
        <div class="w-1/2 flex content">
          {showText(selectedTabId())}
        </div>
        <div class="w-1/4 flex content"></div>
      </div>
    </div>
  );
};

export default App;
