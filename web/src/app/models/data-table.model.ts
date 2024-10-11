export interface TableColumn<T> {
    label: string;
    dataKey: keyof T;
    isSortable?: boolean; 
  }

  export enum FilterStatus {
    All = '',
    Active = 'ACTIVE',
    Future = 'FUTURE',
    Builtout = 'Builtout'
  }

  export interface FilterOption {
    key: string;
    value: string;
  }