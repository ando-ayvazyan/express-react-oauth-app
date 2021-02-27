export interface IRepo {
	id: string,
	name: string;
	ownerName: string;
}

export interface ICommit {
	sha: string,
	commit: {
		message: string
	}
}
