import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { store } from "@app/app-store";
import { Divider } from "@app/components/divider/divider";

@Component({
	selector: "isk-skills",
	templateUrl: "./skills.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills implements OnInit {
	divider = "divider-dark"; // -> <isk-divider> Input()

	// TOP SKILLS
	skillsLang = store.getSkillsLang;
	skillsFrontend = store.getSkillsFrontend;
	skillsBackend = store.getSkillsBackend;
	skillsCSS = store.getSkillsCSS;
	skillsDB = store.getSkillsDB;
	XaaS = store.getSkillsXaaS;
	techniques = store.getSkillsTechniques;
	packages = store.getSkillsPackages;
	wordpress = store.getSkillsWordpress;
	git = store.getSkillsGit;
	testing = store.getSkillsTDD;
	state = store.getSkillsState;
	skillsBundlers = store.getSkillsBundlers;
	skillsGameEngines = store.getSkillsGameEngines;
	skillsStack = store.getSkillsStack;

	ngOnInit(): void {
		// $(function () {
		//   $('[data-toggle="tooltip"]').tooltip();
		// });
	}
}
