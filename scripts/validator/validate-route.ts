import { RouteRequiredError } from "../errors/route-required-error.ts";
import { InvalidCharactersError } from "../errors/invalid-character-error.ts";
import { InvalidFormatError } from "../errors/invalid-format-error.ts";
import { ConsecutiveSlashesError } from "../errors/consecutive-slashes-error.ts";
import { InvalidBoundaryError } from "../errors/invalid-boundary-error.ts";

export function validateRoute(route: string): void {
    if (!route) {
        throw new RouteRequiredError();
    }

    if (/[\\:*?"<>|]/.test(route)) {
        throw new InvalidCharactersError();
    }

    if (!/^[a-z0-9\-_/[\]()]+$/i.test(route)) {
        throw new InvalidFormatError();
    }

    if (/\/{2,}/.test(route)) {
        throw new ConsecutiveSlashesError();
    }

    if (/^\/|\/$/.test(route)) {
        throw new InvalidBoundaryError();
    }
}