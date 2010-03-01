/*
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the “License”); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an “AS IS”
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./std subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 */

var data = {
	"ITEM-1": {
		"id": "ITEM-1",
		"title":"Boundaries of Dissent: Protest and State Power in the Media Age",
		"author": [
			{
				"family": "D'Arcus",
				"given": "Bruce",
				"static-ordering": false
			}
		],
		"publisher": "Routledge",
		"issued": {
			"date-parts":[
				[2005, 11, 22]
			]
		},
		"type": "book"
	},
	"ITEM-2": {
		"id": "ITEM-2",
		"author": [
			{
				"family": "Bennett",
				"given": "Frank G.",
				"suffix": "Jr.",
				"static-ordering": false
			}
		],
		"title":"Getting Property Right: \"Informal\" Mortgages in the Japanese Courts",
		"container-title":"Pac. Rim L. & Pol'y J.",
		"volume": "18",
		"page": "463-509",
		"issued": {
			"date-parts":[
				[2009, 8]
			]
		},
		"type": "article-journal"
	},
	"ITEM-3": {
		"id": "ITEM-3",
		"title":"Key Process Conditions for Production of C<sub>4</sub> Dicarboxylic Acids in Bioreactor Batch Cultures of an Engineered <i>Saccharomyces cerevisiae</i> Strain",
		"author": [
			{
				"family": "Zelle",
				"given": "Rintze M."
			},
			{
				"family": "Hulster",
				"given": "Erik",
				"dropping-particle":"de"
			},
			{
				"family": "Kloezen",
				"given": "Wendy"
			},
			{
				"family":"Pronk",
				"given":"Jack T."
			},
			{
				"family": "Maris",
				"given":"Antonius J.A.",
				"dropping-particle":"van"
			}
		],
		"container-title": "Applied and Environmental Microbiology",
		"issued":{
			"date-parts":[
				[2010, 2]
			]
		},
		"page": "744-750",
		"volume":"76",
		"issue": "3",
		"doi":"10.1128/AEM.02396-09",
		"type": "article-journal"
	}
}