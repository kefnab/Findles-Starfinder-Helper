/// <reference types="fvtt-types" />

declare global {
  namespace SF2e {
    interface HitPoints {
      value: number;
      max: number;
      temp: number;
    }

    interface CreatureAttributes {
      hp: HitPoints;
      ac: { value: number };
      hardness?: { value: number };
    }

    interface CreatureSystemData {
      attributes: CreatureAttributes;
      details: {
        level: { value: number };
      };
    }
  }

  interface ActorPF2e extends Actor {
    readonly isDead: boolean;
    get rollOptions(): Record<string, Record<string, boolean>>;
    isOfType(type: 'creature'): this is CreaturePF2e;
    isOfType(type: 'character' | 'npc' | 'familiar'): this is CreaturePF2e;
    isOfType(...types: string[]): boolean;
  }

  interface CreaturePF2e extends ActorPF2e {
    system: SF2e.CreatureSystemData;
  }

  interface ChatMessagePF2e extends ChatMessage {
    get actor(): ActorPF2e | null;
    get item(): Item | null;
  }

  interface Config {
    PF2E: Record<string, unknown>;
    SF2E?: Record<string, unknown>;
  }

  interface Game {
    system: {
      id: 'sf2e' | 'pf2e';
      version: string;
      [key: string]: unknown;
    };
  }
}

export {};