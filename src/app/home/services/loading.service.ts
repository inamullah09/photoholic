// loading.service.ts
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = false;

  constructor(private loadingController: LoadingController) {}

  async showLoader() {
    if (!this.isLoading) {
      this.isLoading = true;
      const loader = await this.loadingController.create({
        message: 'Loading...',
        spinner: 'crescent',
        translucent: true,
        backdropDismiss: false,
      });
      await loader.present();
    }
  }

  hideLoader() {
    if (this.isLoading) {
      this.isLoading = false;
      this.loadingController.dismiss();
    }
  }
}
