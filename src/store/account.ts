import { create } from 'zustand'

type Section = "" | "profile" | "danger"

interface SelectedSection {
    section: Section;
    selectSection: (value: Section) => void;
}

export const useSectionAccount = create<SelectedSection>((set) => ({
    section: "",
    selectSection: (value) => set(() => ({ section: value }))
}));


