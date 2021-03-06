import { Tree } from 'metric-parser/dist/types/tree/simple.tree/type';
import { FormulizeData, Position } from './ui.interface';
import { UIPipe } from './ui.pipe';
export declare abstract class UIManager extends UIPipe {
    protected prevCursorIndex: number;
    protected prevPosition: Position;
    protected dragged: boolean;
    protected moved: boolean;
    pick(position?: Position): void;
    setData(data: Tree): void;
    getData<T extends Tree>(extractor?: (data: T) => void): T;
    protected triggerUpdate(): void;
    private getExpression;
    protected startDrag(position: Position): void;
    protected endDrag(position: Position): void;
    protected moveDrag(position: Position): void;
    private findClosestUnit;
    selectAll(): void;
    selectRange(start: number, end: number): void;
    protected removeBefore(): void;
    protected removeAfter(): void;
    protected dragFirst(): void;
    protected dragLast(): void;
    protected dragLeft(): void;
    protected dragRight(): void;
    private moveCursorBefore;
    private moveCursorAfter;
    protected moveLeftCursor(dragMode?: boolean): void;
    protected moveUpCursor(): void;
    protected moveRightCursor(dragMode?: boolean): void;
    protected moveDownCursor(): void;
    protected moveFirstCursor(dragMode?: boolean): void;
    protected moveLastCursor(dragMode?: boolean): void;
    clear(): void;
    blur(): void;
    removeDrag(): void;
    insert(data: FormulizeData, position?: Position): void;
    insertValue(value: string): void;
    insertData(data: string | string[] | any[]): void;
    validate(extractor?: (valid: boolean) => void): boolean;
}
