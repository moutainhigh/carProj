import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AttachmentViewComponent} from './attachment-view.component';

describe('AttachmentViewComponent', () => {
    let component: AttachmentViewComponent;
    let fixture: ComponentFixture<AttachmentViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AttachmentViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AttachmentViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
