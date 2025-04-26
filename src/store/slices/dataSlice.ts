import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  selectedCategory: string;
  allData: any[];
}

const initialState: DataState = {
  selectedCategory: "All",          
  allData: [
    { id: 1, title: "Song 1", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 2, title: "Song 2", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 3, title: "Song 3", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 4, title: "Song 4", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 5, title: "Song 5", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 6, title: "Song 6", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 7, title: "Song 7", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 8, title: "Song 8", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 9, title: "Song 9", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 10, title: "Song 10", category: "Music", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },

    { id: 11, title: "Podcast 1", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 12, title: "Podcast 2", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 13, title: "Podcast 3", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 14, title: "Podcast 4", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 15, title: "Podcast 5", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 16, title: "Podcast 6", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 17, title: "Podcast 7", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 18, title: "Podcast 8", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 19, title: "Podcast 9", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" },
    { id: 20, title: "Podcast 10", category: "Podcasts", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YqVMCle4nFaZJheLXuQjKNsj-9Z2OQhlBg&s" }
  ]
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      if (action.payload === "All") {
        state.allData = initialState.allData;
      } else {
        state.allData = initialState.allData.filter(item => item.category === action.payload);
      }
    },
    setAllData: (state, action: PayloadAction<any[]>) => {
      state.allData = action.payload;
    },
  },
});

export const { setCategory,  setAllData } = dataSlice.actions;

export default dataSlice.reducer;
