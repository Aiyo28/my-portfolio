interface SanityBody {
	_createAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export interface PageInfo extends SanityBody {
	_type: 'pageInfo';
	address: string;
	backgroundInfo: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phoneNumber: string;
	profilePic: Image;
}

export interface Skill extends SanityBody {
	_type: 'skills';
	image: Image;
	progress: number;
	name: string;
}

export interface Project extends SanityBody {
	_type: 'projects';
	title: string;
	image: Image;
	linkToBuild: string;
	summary: string;
	technologies: Skills[];
}

export interface WorkExperience extends SanityBody {
	_type: 'workexperiences';
	company: string;
	companyImage: Image;
	dateStarted: date;
	dateEnded: date;
	isCurrentlyWorkingHere: boolean;
	jobTitle: string;
	achievements: string[];
	technologies: Skills[];
}

export interface Social extends SanityBody {
	_type: 'social';
	title: string;
	url: string;
}
