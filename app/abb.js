//http://www.viceregency.com/Abbrev.htm
//https://www.biblija.net/help.es/abbrevs.es.php
//http://www.viceregency.com/Abbrev.htm

const BibleAbbreviations = {
	en: {
		'Gn': ['Genesis', '/Bible/Genesis', 'OT'],
		'Ex': ['Exodus', '/Bible/Exodus', 'OT'],
		'Lv': ['Leviticus', '/Bible/Leviticus', 'OT'],
		'Nm': ['Numbers', '/Bible/Numbers', 'OT'],
		'Dt': ['Deuteronomy', '/Bible/Deuteronomy', 'OT'],
		'Jos': ['Joshua', '/Bible/Joshua', 'OT'],
		'Jg': ['Judges', '/Bible/Judges', 'OT'],
		'Rth': ['Ruth', '/Bible/Ruth', 'OT'],
		'1 Sam': ['1 Samuel', '/Bible/1_Samuel', 'OT'],
		'2 Sam': ['2 Samuel', '/Bible/2_Samuel', 'OT'],
		'1 Ki': ['1 Kings', '/Bible/1_Kings', 'OT'],
		'2 Ki': ['2 Kings', '/Bible/2_Kings', 'OT'],
		'1 Ch': ['1 Chronicles', '/Bible/1_Chronicles', 'OT'],
		'2 Ch': ['2 Chronicles', '/Bible/2_Chronicles', 'OT'],
		'Ez': ['Ezra', '/Bible/Ezra', 'OT'],
		'Neh': ['Nehemiah', '/Bible/Nehemiah', 'OT'],
		'Est': ['Esther', '/Bible/Esther', 'OT'],
		'1 Macc': ['1 Maccabees', '/Bible/1_Maccabees', 'OT'],
		'2 Macc': ['2 Maccabees', '/Bible/2_Maccabees', 'OT'],
		'Job': ['Job', '/Bible/Job', 'OT'],
		'Ps': ['Psalms', '/Bible/Psalms', 'OT'],
		'Pr': ['Proverbs', '/Bible/Proverbs', 'OT'],
		'Ec': ['Ecclesiastes', '/Bible/Ecclesiastes', 'OT'],
		'Song': ['Song of Solomon', '/Bible/Song_of_Solomon', 'OT'],
		'Sir': ['Sirach (Ecclesiasticus)', '/Bible/Sirach', 'OT'],
		'Wis': ['Wisdom of Solomon', '/Bible/Wisdom_of_Solomon', 'OT'],
		'Is': ['Isaiah', '/Bible/Isaiah', 'OT'],
		'Jer': ['Jeremiah', '/Bible/Jeremiah', 'OT'],
		'Lam': ['Lamentations', '/Bible/Lamentations', 'OT'],
		'Bar': ['Baruch', '/Bible/Baruch', 'OT'],
		'Ezk': ['Ezekiel', '/Bible/Ezekiel', 'OT'],
		'Dn': ['Daniel', '/Bible/Daniel', 'OT'],
		'Ho': ['Hosea', '/Bible/Hosea', 'OT'],
		'Jl': ['Joel', '/Bible/Joel', 'OT'],
		'Am': ['Amos', '/Bible/Amos', 'OT'],
		'Ob': ['Obadiah', '/Bible/Obadiah', 'OT'],
		'Jon': ['Jonah', '/Bible/Jonah', 'OT'],
		'Mic': ['Micah', '/Bible/Micah', 'OT'],
		'Nah': ['Nahum', '/Bible/Nahum', 'OT'],
		'Hab': ['Habakkuk', '/Bible/Habakkuk', 'OT'],
		'Zep': ['Zephaniah', '/Bible/Zephaniah', 'OT'],
		'Hag': ['Haggai', '/Bible/Haggai', 'OT'],
		'Zec': ['Zechariah', '/Bible/Zechariah', 'OT'],
		'Mal': ['Malachi', '/Bible/Malachi', 'OT'],
		'Mt': ['Matthew', '/Bible/Matthew', 'NT'],
		'Mk': ['Mark', '/Bible/Mark', 'NT'],
		'Lk': ['Luke', '/Bible/Luke', 'NT'],
		'Jn': ['John', '/Bible/John', 'NT'],
		'Acts': ['Acts of the Apostles', '/Bible/Acts_of_the_Apostles', 'NT'],
		'Ro': ['Romans', '/Bible/Romans', 'NT'],
		'1 Co': ['1 Corinthians', '/Bible/1_Corinthians', 'NT'],
		'2 Co': ['2 Corinthians', '/Bible/2_Corinthians', 'NT'],
		'Ga': ['Galatians', '/Bible/Galatians', 'NT'],
		'Eph': ['Ephesians', '/Bible/Ephesians', 'NT'],
		'Phil': ['Philippians', '/Bible/Philippians', 'NT'],
		'Col': ['Colossians', '/Bible/Colossians', 'NT'],
		'1 Th': ['1 Thessalonians', '/Bible/1_Thessalonians', 'NT'],
		'2 Th': ['2 Thessalonians', '/Bible/2_Thessalonians', 'NT'],
		'1 Ti': ['1 Timothy', '/Bible/1_Timothy', 'NT'],
		'2 Ti': ['2 Timothy', '/Bible/2_Timothy', 'NT'],
		'Tit': ['Titus', '/Bible/Titus', 'NT'],
		'Pm': ['Philemon', '/Bible/Philemon', 'NT'],
		'Heb': ['Hebrews', '/Bible/Hebrews', 'NT'],
		'Jm': ['James', '/Bible/James', 'NT'],
		'1 P': ['1 Peter', '/Bible/1_Peter', 'NT'],
		'2 P': ['2 Peter', '/Bible/2_Peter', 'NT'],
		'1 Jn': ['1 John', '/Bible/1_John', 'NT'],
		'2 Jn': ['2 John', '/Bible/2_John', 'NT'],
		'3 Jn': ['3 John', '/Bible/3_John', 'NT'],
		'Jud': ['Jude', '/Bible/Jude', 'NT'],
		'Rev': ['Revelation', '/Bible/Revelation', 'NT'],
		'Bel': ['Bel and the Dragon', '/Bible/Bel_and_the_Dragon', 'APO'],
		'Man': ['Prayer of Manesseh', '/Bible/Prayer_of_Manesseh', 'APO'],
		'Tb': ['Tobit', '/Bible/Tobit', 'APO'],
		'Jdt': ['Judith', '/Bible/Judith', 'APO'],
		'1 Enoch': ['Book of Enoch', '/Bible/Enoch', 'APO'],
		'As. Mos.': ['Assumption of Moses', '/Bible/Assumption_of_Moses', 'APO']
	},
	es: {
		'Gn': ['Génesis', '/es/Bible/Genesis', 'OT'],
		'Ex': ['Éxodo', '/es/Bible/Exodus', 'OT'],
		'Lv': ['Levítico', '/es/Bible/Leviticus', 'OT'],
		'Nm': ['Números', '/es/Bible/Numbers', 'OT'],
		'Dt': ['Deuteronomio', '/es/Bible/Deuteronomy', 'OT'],
		'Jos': ['Josué', '/es/Bible/Joshua', 'OT'],
		'Jue': ['Jueces', '/es/Bible/Judges', 'OT'],
		'Rt': ['Ruth', '/es/Bible/Ruth', 'OT'],
		'1 Sam': ['I Samuel', '/es/Bible/1_Samuel', 'OT'],
		'2 Sam': ['II Samuel', '/es/Bible/2_Smauel', 'OT'],
		'1 Re': ['I Reyes', '/es/Bible/1_Kings', 'OT'],
		'2 Re': ['II Reyes', '/es/Bible/2_Kings', 'OT'],
		'1 Cr': ['I Crónicas', '/es/Bible/1_Chronicles', 'OT'],
		'2 Cr': ['II Crónicas', '/es/Bible/2_Chronicles', 'OT'],
		'Esd': ['Esdras', '/es/Bible/Ezra', 'OT'],
		'Neh': ['Nehemías', '/es/Bible/Nehemiah', 'OT'],
		'Est': ['Ester', '/es/Bible/Esther', 'OT'],
		'1 Mac': ['I Macabeos', '/es/Bible/1_Maccabees', 'OT'],
		'2 Mac': ['II Macabeos', '/es/Bible/2_Maccabees', 'OT'],
		'Job': ['Job', '/es/Bible/Job', 'OT'],
		'Sal': ['Salmos', '/es/Bible/Psalms', 'OT'],
		'Pr': ['Proverbios', '/es/Bible/Proverbs', 'OT'],
		'Ec': ['Eclesiastés', '/es/Bible/Ecclesiastes', 'OT'],
		'Cnt': ['Cantar de los Cantares', '/es/Bible/Song_of_Solomon', 'OT'],
		'Eclo': ['Eclesiástico', '/es/Bible/Sirach', 'OT'],
		'Sab': ['Sabiduría', '/es/Bible/Wisdom_of_Solomon', 'OT'],
		'Is': ['Isaías', '/es/Bible/Isaiah', 'OT'],
		'Jer': ['Jeremías', '/es/Bible/Jeremiah', 'OT'],
		'Lm': ['Lamentaciones de Jeremías', '/es/Bible/Lamentations', 'OT'],
		'Bar': ['Baruc', '/es/Bible/Baruch', 'OT'],
		'Ez': ['Ezequiel', '/es/Bible/Ezekiel', 'OT'],
		'Dn': ['Daniel', '/es/Bible/Daniel', 'OT'],
		'Os': ['Oseas', '/es/Bible/Hosea', 'OT'],
		'Jl': ['Joel', '/es/Bible/Joel', 'OT'],
		'Am': ['Amós', '/es/Bible/Amos', 'OT'],
		'Abd': ['Abdías', '/es/Bible/Obadiah', 'OT'],
		'Jon': ['Jonás', '/es/Bible/Jonah', 'OT'],
		'Miq': ['Miqueas', '/es/Bible/Micah', 'OT'],
		'Nah': ['Nahum', '/es/Bible/Nahum', 'OT'],
		'Hab': ['Habacuc', '/es/Bible/Habakkuk', 'OT'],
		'Sof': ['Sofonías', '/es/Bible/Zephaniah', 'OT'],
		'Hag': ['Hageo', '/es/Bible/Haggai', 'OT'],
		'Zac': ['Zacarías', '/es/Bible/Zechariah', 'OT'],
		'Mal': ['Malaquías', '/es/Bible/Malachi', 'OT'],
		'Mt': ['Evangelio de Mateo', '/es/Bible/Matthew', 'NT'],
		'Mc': ['Evangelio de Marcos', '/es/Bible/Mark', 'NT'],
		'Lc': ['Evangelio de Lucas', '/es/Bible/Luke', 'NT'],
		'Jn': ['Evangelio de Juan', '/es/Bible/John', 'NT'],
		'Hch': ['Hechos de los apóstoles', '/es/Bible/Acts_of_the_Apostles', 'NT'],
		'Ro': ['Epístola a los romanos', '/es/Bible/Romans', 'NT'],
		'1 Co': ['Primera epístola a los corintios', '/es/Bible/1_Corinthians', 'NT'],
		'2 Co': ['Segunda epístola a los corintios', '/es/Bible/2_Corinthians', 'NT'],
		'Gl': ['Epístola a los gálatas', '/es/Bible/Galatians', 'NT'],
		'Ef': ['Epístola a los efesios', '/es/Bible/Ephesians', 'NT'],
		'Flp': ['Epístola a los filipenses', '/es/Bible/Philippians', 'NT'],
		'Col': ['Epístola a los colosenses', '/es/Bible/Colossians', 'NT'],
		'1 Ts': ['Primera epístola a los tesalonicenses', '/es/Bible/1_Thessalonians', 'NT'],
		'2 Ts': ['Segunda epístola a los tesalonicenses', '/es/Bible/2_Thessalonians', 'NT'],
		'1 Ti': ['Primera epístola a Timoteo', '/es/Bible/1_Timothy', 'NT'],
		'2 Ti': ['Segunda epístola a Timoteo', '/es/Bible/2_Timothy', 'NT'],
		'Tit': ['Epístola a Tito', '/es/Bible/Titus', 'NT'],
		'Flm': ['Epístola a Filemón', '/es/Bible/Philemon', 'NT'],
		'Heb': ['Epístola a los hebreos', '/es/Bible/Hebrews', 'NT'],
		'Stg': ['Epístola de Santiago', '/es/Bible/James', 'NT'],
		'1 P': ['Primera epístola de Pedro', '/es/Bible/1_Peter', 'NT'],
		'2 P': ['Segunda epístola de Pedro', '/es/Bible/2_Peter', 'NT'],
		'1 Jn': ['Primera epístola de Juan', '/es/Bible/1_John', 'NT'],
		'2 Jn': ['Segunda epístola de Juan', '/es/Bible/2_John', 'NT'],
		'3 Jn': ['Tercera epístola de Juan', '/es/Bible/3_John', 'NT'],
		'Jud': ['Epístola de Judas', '/es/Bible/Jude', 'NT'],
		'Ap': ['Apocalipsis', '/es/Bible/Revelation', 'NT'],
		'Bel': ['Historia de Bel y el Dragón', '/es/Bible/Bel_and_the_Dragon', 'APO'],
		'Man': ['Oración de Manasés', '/es/Bible/Prayer_of_Manesseh', 'APO'],
		'Tb': ['Tobit', '/es/Bible/Tobit', 'APO'],
		'Jdt': ['Judith', '/es/Bible/Judith', 'APO'],
		'1 Enoc': ['Libro de Enoc', '/es/Bible/Enoch', 'APO'],
		'As. Mos.': ['Asunción de Moisés', '/es/Bible/Assumption_of_Moses', 'APO']
	}
};

module.exports = BibleAbbreviations;