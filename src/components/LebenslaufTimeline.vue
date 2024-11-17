<script setup>
import { ref } from "vue";
import { useStore } from "../stores";
import { useElementBounding } from "@vueuse/core";

const mainStore = useStore();

const vitaElement = ref(null);
mainStore.vitaElementBoundings = useElementBounding(vitaElement);
</script>

<template id="Lebenslauf">
  <div class="px-4 text-sm leading-relaxed dark:bg-gray-700 dark:text-gray-300">
    <div class="max-w-5xl mx-auto">
      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[auto_55px_auto_auto] sm:grid-rows-[auto_auto_auto_auto] pb-5"
      >
        <h2
          ref="vitaElement"
          class="col-start-1 sm:col-start-2 row-start-1 pl-4 sm:pb-4 sm:pt-4 text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#83eaf1] to-[#63a4ff] col-span-2"
        >
          Berufserfahrung
        </h2>
        <svg
          class="col-start-1 sm:col-start-2 row-start-2 row-span-3 sm:row-span-2"
          width="100%"
          height="125%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 row-start-2 sm:col-start-1 sm:col-end-2 sm:row-start-2 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          09/2022 – jetzt
        </h3>
        <div
          class="pb-6 sm:pb-2 col-start-2 sm:col-start-3 row-start-3 sm:row-start-2 sm:mt-[1rem]"
        >
          <a
            href="../assets/documents/Dienstliche-Beurteilung-LHK.pdf"
            target="_blank"
            title="PDF - Dienstliche Beurteilung Landeshauptstadt Kiel"
            class="underline underline-offset-2 hover:no-underline block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Systemkoordinator</a
          >
          <em class="block text-sm">Landeshauptstadt Kiel</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-4 sm:row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>
            Fachverfahrensbetreuer der Abteilung Zuwanderung des Stadt- und Ordnungsamtes (Key-User
            für Advis, Einbürgerung, VisitVis, HESS-Kassensystem)
          </li>
          <li>Anwendungsbetreuung, -pflege und Fehlerbehebung</li>
          <li>lfd. Kommunikation mit den Softwarehersteller*innen</li>
          <li>Zuarbeiten zu fachlichen Stellungnahmen bei neuen Gesetzen bzw. –änderungen</li>
          <li>Pflege der Regionaldatei</li>
          <li>Hardwarebeschaffung, -installation und -pflege</li>
          <li>Pflege der Internetpräsentation des Stadtamtes und Ordnungsamtes</li>
          <li>
            Auswertungen und Statistiken erstellen einschl. Datenbankprogrammierungen für
            Sonderauswertungen
          </li>
          <li>Durchführung von Wahlen und Abstimmungen für die Landeshauptstadt Kiel</li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto] pb-5"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-3"
          width="100%"
          height="125%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          01/2022 – 09/2022
        </h3>
        <div
          class="pb-6 sm:pb-2 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <span class="block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >aktiv arbeitssuchend / Familienzeit</span
          >
          <em class="block text-sm">Agentur für Arbeit</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>
            persönliche Weiterbildung in mehreren Online-Kursen sowie Dokumentations-Webseiten mit
            Schwerpunkt auf aktuelle Webtechnologien.
            <em>(Javascript, VueJS, Vite, Unit-Testing, CSS3, Tailwindcss, NoSQL Datenbanken)</em>
          </li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto] pb-5"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-3"
          width="100%"
          height="125%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          11/2012 – 01/2022
        </h3>
        <div
          class="pb-6 sm:pb-2 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <a
            href="../assets/documents/Arbeitszeugnis-Wiese-Umweltservice.pdf"
            target="_blank"
            title="PDF - Arbeitszeugnis Wiese Umweltservice GmbH & Co. KG"
            class="underline underline-offset-2 hover:no-underline block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Assistenz der Geschäftsführung</a
          >
          <em class="block text-sm">Wiese Umweltservice GmbH & Co. KG</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>Mitarbeit und teilweise Leitung in allen Betriebsbereichen</li>
          <li>Kundenbetreuung und Krisenmanagement am Telefon</li>
          <li>vorbereitende Buchhaltung</li>
          <li>
            Erstellung und Bearbeitung von allen betriebsrelevanten Unterlagen (z.B.
            Ausschreibungen, Bilanzen, Jahresabschlüssen, Arbeitsanweisungen aller Betriebsbereiche,
            Betriebsanweisungen, Checklisten, Genehmigungsverfahren)
          </li>
          <li>Mitarbeiterführung und -koordination</li>
          <li>
            Sicherung betriebssicherheitsrelevanter Punkte in Kommunikation mit dem
            Sicherheitsbeauftragten
          </li>
          <li>betrieblicher Ersthelfer</li>
          <li>Gestaltung des Corporate Designs und Aufbau der Corporate Identity</li>
          <li>
            Überwachung, Qualitätskontrolle und jährliche Auditierung als Entsorgungsfachbetrieb
            sowie für das Zertifizierungssystem für nachhaltige Biomasse nach REDcert
          </li>
          <li>Instandhaltung und Pflege aller Maschinen in jedem Betriebsbereich</li>
          <li>
            Einführung, Konfiguration und Überwachung der betriebseigenen EDV-, Telekommunikations-
            und IT-Strukturen in Zusammenarbeit mit den jeweiligen Dienstleistern
          </li>
          <li>
            Einführung von Sage 100 inkl. Modul Euro-Green-Line und Integration alter
            Geschäftsprozesse in die neue Softwareumgebung
          </li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto] pb-5"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-3"
          width="100%"
          height="125%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          05/2010 – 11/2012
        </h3>
        <div
          class="pb-6 sm:pb-0 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <span class="block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >selbstständige Tätigkeit</span
          >
          <em class="block text-sm">schmalisign Gestaltung und Programmierung</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>werbeorientierte Kundenberatung und Betreuung</li>
          <li>
            Konzeptionierung, Gestaltung und Herstellung unterschiedlichster Digital- und
            Printmedien auf Kundenwunsch (Visitenkarten, Banner, Poster, Flyer, Stempel, Webseiten,
            Newsletter u.v.m.)
          </li>
          <li>Entwicklung von Werbekonzepten und Corporate Designs</li>
          <li>
            Programmierung und Pflege von Webseiten und deren Inhalt im Schwerpunkt Contao CMS
          </li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto] pb-5"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-3"
          width="100%"
          height="115%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          11/2009 – 05/2010
        </h3>
        <div
          class="pb-6 sm:pb-0 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <a
            href="../assets/documents/Arbeitszeugnis-Kreativagent.pdf"
            target="_blank"
            title="PDF - Arbeitszeugnis Kreativagent Werbeagentur"
            class="underline underline-offset-2 hover:no-underline block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Mediengestalter - Digital und Print / Leitung Team Web</a
          >
          <em class="block text-sm">Kreativagent Werbeagentur</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>Leitung, Umsetzung und Abwicklung verschiedenster Projekte</li>
          <li>Leitung der Web-Abteilung</li>
          <li>Mitarbeiterkoordination, Anleitung von Auszubildenden</li>
          <li>
            Layout, Satz, Reinzeichnung, Druckvorlagenherstellung, Produktionsplanung, Datenhandling
          </li>
          <li>Webbasierte Designumsetzung in HTML und CSS auf Contao-CMS Basis</li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto]"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-3"
          width="100%"
          height="105%"
        >
          <g>
            <line class="dotted-line stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          07/2009 – 10/2009
        </h3>
        <div class="sm:pb-0 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]">
          <span class="block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Rucksack-Wanderung durch Norddeutschland</span
          >
        </div>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[auto_55px_auto_auto] sm:grid-rows-[auto_auto_auto_auto] pb-5"
      >
        <h2
          class="text-transparent bg-clip-text bg-gradient-to-b from-[#83eaf1] to-[#63a4ff] col-span-2 col-start-1 sm:col-start-2 row-start-1 pl-4 sm:pb-2 text-3xl sm:text-5xl font-bold"
        >
          Ausbildung
        </h2>
        <svg
          class="col-start-1 sm:col-start-2 row-start-2 row-span-3 sm:row-span-2"
          width="100%"
          height="115%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 row-start-2 sm:col-start-1 sm:col-end-2 sm:row-start-2 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          08/2006 – 06/2009
        </h3>
        <div
          class="pb-6 sm:pb-2 col-start-2 sm:col-start-3 row-start-3 sm:row-start-2 sm:mt-[1rem]"
        >
          <a
            href="../assets/documents/Ausbildung-Zeugnise.pdf"
            target="_blank"
            title="PDF - Ausbildungszeugnis mStore-kiel und Abschlusszeugnis Mediengestalter IHK"
            class="underline underline-offset-2 hover:no-underline block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Mediengestalter Digital und Print, Fachrichtung Mediendesign</a
          >
          <em class="block text-sm">mStore-Kiel</em>
        </div>
        <ul
          class="list-disc pl-4 col-start-2 sm:col-start-3 row-start-4 sm:row-start-3 flex flex-col gap-y-4 text-base"
        >
          <li>Herstellung von Beschriftung</li>
          <li>Textilveredelung, Webseiten und weiteren Druck- und Werbeprodukten</li>
          <li>
            Kundenberatung und Verkauf im angeschlossenen Ladengeschäft für Apple Hard- und Software
            (Apple Premium Reseller)
          </li>
          <li>Vierteljährliche Apple Sales Trainings auf Gold Level</li>
          <li>Leitung der Programmschulungen intern und extern</li>
          <li>
            Kundenberatung und Verkauf von Telefon- und Internetverträgen inkl. Support bei
            Kundenbeschwerden oder Problemen am Telefon und im Ladengeschäft (Arcor Partnershop)
          </li>
        </ul>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto] pb-5"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-2"
          width="100%"
          height="125%"
        >
          <g>
            <line class="st0 stroke-grau stroke-[5px]" x1="25" y1="25" x2="25" y2="100%" />
          </g>
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          07/2005 – 07/2006
        </h3>
        <div
          class="pb-6 sm:pb-0 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <span class="block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Ausbildungssuche inkl. Langzeit-Praktikum (EQJ) beim Ausbildungsbetrieb</span
          >
          <em class="block text-sm">Agentur für Arbeit</em>
        </div>
      </section>

      <section
        class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] grid-rows-[55px_auto_auto] sm:grid-rows-[auto_auto_auto]"
      >
        <svg
          class="col-start-1 sm:col-start-2 col-end-2 row-start-1 row-span-2"
          width="100%"
          height="115%"
        >
          <g>
            <circle class="fill-grau" cx="25" cy="29" r="12" />
            <circle
              class="fill-grau stroke-white dark:stroke-gray-700 stroke-[4px]"
              cx="25"
              cy="29"
              r="6.5"
              Í
            />
          </g>
        </svg>
        <h3
          class="col-start-2 sm:col-start-1 row-start-1 flex items-center sm:justify-end sm:items-start font-bold text-right text-sm sm:text-lg mt-2 sm:mt-[.98rem]"
        >
          08/1999 – 06/2005
        </h3>
        <div
          class="pb-6 sm:pb-0 col-start-2 sm:col-start-3 row-start-2 sm:row-start-1 sm:mt-[1rem]"
        >
          <span class="block font-bold text-lg sm:text-xl text-gruen leading-snug"
            >Abschluss mittlerer Reife</span
          >
          <em class="block text-sm">Realschule Altenholz</em>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
#lebenslauf {
  h2 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
}
.dotted-line {
  stroke-dasharray: 25, 20;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
