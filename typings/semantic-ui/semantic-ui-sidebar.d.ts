/// <reference path="../jquery/jquery.d.ts"/>

interface SemanticUISidebarOptions {
  context?: JQuery;
  delaySetup?: boolean;
}

interface JQuery {
  sidebar(behavior: string, arg1?: any, arg2?: any): JQuery;
  sidebar(options: SemanticUISidebarOptions): JQuery;
}
