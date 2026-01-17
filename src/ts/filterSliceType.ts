type categoriesPagination = {
    paginationActiveIndex: number;
    paginationTitle: string[];
};

type categoriesSortirovka = {
    sortirovkaActiveIndex: number;
    sortirovkaTitle: string[];
};

export interface filterSliceType {
    categoriesPagination: categoriesPagination;
    categoriesSortirovka: categoriesSortirovka;
    searchProduct: string;
}
