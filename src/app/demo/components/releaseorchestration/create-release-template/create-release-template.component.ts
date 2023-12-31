import { Component, OnInit } from '@angular/core';
import {
	Definition,
	Designer,
	GlobalEditorContext,
	Properties,
	Uid,
	Step,
	BranchedStep,
	StepEditorContext,
	StepsConfiguration,
	ToolboxConfiguration,
	ValidatorConfiguration
} from 'sequential-workflow-designer';

function createFirstStep(): Step {
	return {
		id: Uid.next(),
		componentType: 'task',
		name: 'Start Deployment',
		properties: { 
			details: 'You can add components and other tasks after the start step' 
		},
		type: 'task'
	};
}

function createStep(): Step {
	return {
		id: Uid.next(),
		componentType: 'task',
		name: 'Deploy Component',
		properties: { 
			stepName: '', 
			componentName: 'sspd-api.shared-services', 
			pipeline: 'blue-green-acm', 
			environment: 'prod', 
		},
		type: 'task'
	};
}

function createParallelStep(): BranchedStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'parallel',
		name: 'Parallel Deployment',
		properties: {
		},
		branches: {
			"Stage 1": [createStep()],
			"Stage 2": [createStep()]
		}
	};
}

function randomCondition() {
	const a = Math.random() > 0.5 ? 'alfa' : 'beta';
	const b = Math.random() > 0.5 ? '>' : '<';
	const c = Math.round(Math.random() * 100);
	return `${a} ${b} ${c}`;
}

function createDefinition(): Definition {
	return {
		properties: { 
			templateName: ''
		},
		sequence: [createFirstStep()]
		// sequence: [createFirstStep(), createStep(), createStep(), createParallelStep()]
	};
}

@Component({
	templateUrl: './create-release-template.component.html',
	providers: []
})

export class CreateReleaseTemplateComponent implements OnInit {
	private designer?: Designer;

	public definition: Definition = createDefinition();
	public definitionJSON?: string;
	public isValid?: boolean;

	public readonly toolboxConfiguration: ToolboxConfiguration = {
		groups: [
			{
				name: 'Step',
				steps: [createStep(), createParallelStep()]
			}
		]
	};
	public readonly stepsConfiguration: StepsConfiguration = {
		iconUrlProvider: () => './assets/angular-icon.svg'
	};
	public readonly validatorConfiguration: ValidatorConfiguration = {
		step: (step: Step) => !!step.name && step.properties['stepName'] != '',
		root: (definition: Definition) => definition.properties['templateName'] != ''
	};

	public ngOnInit() {
		this.updateDefinitionJSON();
	}

	public onDesignerReady(designer: Designer) {
		this.designer = designer;
		this.updateIsValid();
		console.log('designer ready', this.designer);
	}

	public onDefinitionChanged(definition: Definition) {
		this.definition = definition;
		this.updateIsValid();
		this.updateDefinitionJSON();
		console.log('definition has changed');
	}

	public updateName(step: Step, event: Event, context: StepEditorContext) {
		step.name = (event.target as HTMLInputElement).value;
		context.notifyNameChanged();
	}

	public updateProperty(properties: Properties, name: string, event: Event, context: GlobalEditorContext | StepEditorContext) {
		properties[name] = (event.target as HTMLInputElement).value;
		context.notifyPropertiesChanged();
	}

	public reloadDefinitionClicked() {
		this.definition = createDefinition();
		this.updateDefinitionJSON();
	}

	private updateDefinitionJSON() {
		this.definitionJSON = JSON.stringify(this.definition, null, 2);
	}

	private updateIsValid() {
		this.isValid = this.designer?.isValid();
	}

	public saveTemplateDefinition() {
		alert(this.definitionJSON);
		console.log(this.definitionJSON);
	}
}
