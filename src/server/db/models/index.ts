export interface UsersTable {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    created_at?: Date;
}

export interface MysqlResponse{
    affectedRows: number;
    insertId: number;
}